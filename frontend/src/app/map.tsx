import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { router } from "expo-router";
import MapSearchOverlay from "@/components/map-search-overlay";
import RideSheet from "@/components/ride-sheet";
import { Colors } from "@/global/color-variants";

const fallbackRegion = {
    latitude: -23.5505,
    longitude: -46.6333,
    latitudeDelta: 0.08,
    longitudeDelta: 0.08,
};

export default function MapScreen() {
    const mapRef = useRef<MapView>(null);
    const [origin, setOrigin] = useState({ latitude: fallbackRegion.latitude, longitude: fallbackRegion.longitude });
    const [destination, setDestination] = useState({
        latitude: fallbackRegion.latitude + 0.04,
        longitude: fallbackRegion.longitude + 0.05,
    });
    const [route, setRoute] = useState([
        { latitude: fallbackRegion.latitude, longitude: fallbackRegion.longitude },
        { latitude: fallbackRegion.latitude + 0.04, longitude: fallbackRegion.longitude + 0.05 },
    ]);

    useEffect(() => {
        (async () => {
            let current = { latitude: fallbackRegion.latitude, longitude: fallbackRegion.longitude };
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status === "granted") {
                    const position = await Location.getCurrentPositionAsync({});
                    current = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                }
            } catch (error) {
                void error;
            }

            const dest = {
                latitude: current.latitude + 0.04,
                longitude: current.longitude + 0.05,
            };

            setOrigin(current);
            setDestination(dest);
            setRoute([
                current,
                { latitude: current.latitude + 0.015, longitude: current.longitude + 0.01 },
                { latitude: current.latitude + 0.02, longitude: current.longitude + 0.035 },
                dest,
            ]);

            mapRef.current?.animateToRegion(
                {
                    latitude: (current.latitude + dest.latitude) / 2,
                    longitude: (current.longitude + dest.longitude) / 2,
                    latitudeDelta: 0.12,
                    longitudeDelta: 0.12,
                },
                600
            );
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={StyleSheet.absoluteFill}
                initialRegion={fallbackRegion}
                mapType="standard"
                showsUserLocation
                showsMyLocationButton={false}
            >
                <Marker coordinate={origin} anchor={{ x: 0.5, y: 0.5 }}>
                    <View style={styles.originDot} />
                </Marker>
                <Marker coordinate={destination} pinColor="black" />
                <Polyline coordinates={route} strokeColor={Colors.black} strokeWidth={4} />
            </MapView>
            <MapSearchOverlay onBack={() => router.back()} destination="Aeroporto de Guarulhos" />
            <RideSheet destination="Aeroporto de Guarulhos" distance="12,5 km" duration="28 min" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    originDot: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: Colors.black,
        borderWidth: 3,
        borderColor: Colors.white,
    },
});