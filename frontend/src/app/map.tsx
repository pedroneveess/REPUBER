import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import * as Location from "expo-location";
import { router } from "expo-router";
import MapSearchOverlay from "@/components/map-search-overlay";
import RideSheet from "@/components/ride-sheet";
import { Colors } from "@/global/color-variants";

type Coord = { latitude: number; longitude: number };

const fallbackOrigin: Coord = { latitude: -23.5505, longitude: -46.6333 };

const mapHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<style>
html, body, #map { height: 100%; width: 100%; margin: 0; padding: 0; background: #dfe1e5; }
.leaflet-control-attribution { font-size: 9px; background: rgba(255, 255, 255, 0.75); }
.uber-origin { width: 18px; height: 18px; background: #000000; border: 3px solid #ffffff; border-radius: 50%; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45); }
.uber-pin { width: 22px; height: 22px; background: #000000; border: 3px solid #ffffff; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.45); }
</style>
</head>
<body>
<div id="map"></div>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
var map = L.map("map", { center: [-23.5505, -46.6333], zoom: 14, zoomControl: false });
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap" }).addTo(map);
var originMarker = null;
var destMarker = null;
var routeLine = null;
var routeHalo = null;
window.__setOrigin = function (lat, lng) {
    if (originMarker) { originMarker.setLatLng([lat, lng]); }
    else { originMarker = L.marker([lat, lng], { icon: L.divIcon({ className: "", html: "<div class='uber-origin'></div>", iconSize: [18, 18], iconAnchor: [9, 9] }) }).addTo(map); }
    map.setView([lat, lng], 16);
};
window.__showDestination = function (lat, lng) {
    if (destMarker) { destMarker.setLatLng([lat, lng]); }
    else { destMarker = L.marker([lat, lng], { icon: L.divIcon({ className: "", html: "<div class='uber-pin'></div>", iconSize: [22, 22], iconAnchor: [11, 22] }) }).addTo(map); }
};
window.__clearRoute = function () {
    if (routeLine) { map.removeLayer(routeLine); routeLine = null; }
    if (routeHalo) { map.removeLayer(routeHalo); routeHalo = null; }
};
window.__showRoute = function (coords) {
    window.__clearRoute();
    routeHalo = L.polyline(coords, { color: "#ffffff", weight: 9, opacity: 0.9 }).addTo(map);
    routeLine = L.polyline(coords, { color: "#000000", weight: 5 }).addTo(map);
    map.fitBounds(routeLine.getBounds(), { paddingTopLeft: [50, 150], paddingBottomRight: [50, 320] });
};
map.on("click", function (event) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type: "select", lat: event.latlng.lat, lng: event.latlng.lng }));
});
</script>
</body>
</html>`;

const haversineKm = (from: Coord, to: Coord) => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const dLat = toRad(to.latitude - from.latitude);
    const dLng = toRad(to.longitude - from.longitude);
    const h =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(from.latitude)) * Math.cos(toRad(to.latitude)) * Math.sin(dLng / 2) ** 2;
    return 6371 * 2 * Math.asin(Math.sqrt(h));
};

const formatDistance = (km: number) =>
    km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1).replace(".", ",")} km`;

const formatDuration = (seconds: number) => `${Math.max(1, Math.round(seconds / 60))} min`;

export default function MapScreen() {
    const webRef = useRef<WebView>(null);
    const originRef = useRef<Coord>(fallbackOrigin);
    const [webReady, setWebReady] = useState(false);
    const [origin, setOrigin] = useState<Coord>(fallbackOrigin);
    const [destination, setDestination] = useState<Coord | null>(null);
    const [destinationLabel, setDestinationLabel] = useState("");
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [loading, setLoading] = useState(false);

    const inject = (script: string) => webRef.current?.injectJavaScript(`${script}; true;`);

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status === "granted") {
                    const position = await Location.getCurrentPositionAsync({});
                    const current = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    originRef.current = current;
                    setOrigin(current);
                }
            } catch (error) {
                void error;
            }
        })();
    }, []);

    useEffect(() => {
        if (webReady) {
            inject(`__setOrigin(${origin.latitude}, ${origin.longitude})`);
        }
    }, [webReady, origin]);

    const fetchRoute = async (from: Coord, to: Coord) => {
        setLoading(true);
        const roadKm = haversineKm(from, to) * 1.35;
        let coords: number[][] = [
            [from.latitude, from.longitude],
            [to.latitude, to.longitude],
        ];
        let distanceText = formatDistance(roadKm);
        let durationText = formatDuration((roadKm / 30) * 3600);
        try {
            const url = `https://router.project-osrm.org/route/v1/driving/${from.longitude},${from.latitude};${to.longitude},${to.latitude}?overview=full&geometries=geojson`;
            const response = await fetch(url);
            const data = await response.json();
            const route = data.routes?.[0];
            if (!route) {
                throw new Error("route");
            }
            coords = route.geometry.coordinates.map((point: number[]) => [point[1], point[0]]);
            distanceText = formatDistance(route.distance / 1000);
            durationText = formatDuration(route.duration);
        } catch (error) {
            void error;
        }
        inject(`__showRoute(${JSON.stringify(coords)})`);
        setDistance(distanceText);
        setDuration(durationText);
        setLoading(false);
    };

    const selectDestination = (latitude: number, longitude: number) => {
        const target: Coord = { latitude, longitude };
        setDestination(target);
        setDestinationLabel("Destino selecionado");
        setDistance("");
        setDuration("");
        inject(`__showDestination(${latitude}, ${longitude})`);
        inject("__clearRoute()");
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=18&lat=${latitude}&lon=${longitude}`)
            .then((response) => response.json())
            .then((data) => {
                if (data?.display_name) {
                    setDestinationLabel(
                        String(data.display_name).split(",").slice(0, 3).join(",").trim()
                    );
                }
            })
            .catch(() => undefined);
        fetchRoute(originRef.current, target);
    };

    const handleMessage = (event: { nativeEvent: { data: string } }) => {
        try {
            const message = JSON.parse(event.nativeEvent.data);
            if (message.type === "select") {
                selectDestination(message.lat, message.lng);
            }
        } catch (error) {
            void error;
        }
    };

    return (
        <View style={styles.container}>
            <WebView
                ref={webRef}
                originWhitelist={["*"]}
                source={{ html: mapHtml }}
                style={StyleSheet.absoluteFill}
                javaScriptEnabled
                domStorageEnabled
                onLoadEnd={() => setWebReady(true)}
                onMessage={handleMessage}
            />
            <MapSearchOverlay
                onBack={() => router.back()}
                destination={destination ? destinationLabel : null}
            />
            {destination && (
                <RideSheet
                    destination={destinationLabel}
                    distance={distance}
                    duration={duration}
                    loading={loading}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.surface,
    },
});