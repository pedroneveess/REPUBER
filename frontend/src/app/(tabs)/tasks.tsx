import { useState } from "react";
import { router } from "expo-router";
import { ScrollView, Text, Pressable, StyleSheet } from "react-native";
import SectionHeader from "@/components/section-header";
import SavedPlaces from "@/components/saved-places";
import { Colors } from "@/global/color-variants";

const filters = ["Todas", "Corridas", "Envios"];

const trips = [
    { type: "Corridas", icon: "car" as const, title: "Av. Paulista → Casa", subtitle: "12 jun · R$ 18,90" },
    { type: "Envios", icon: "cube" as const, title: "Centro → Bairro Novo", subtitle: "08 jun · R$ 12,40" },
    { type: "Corridas", icon: "car" as const, title: "Aeroporto → Centro", subtitle: "02 jun · R$ 42,00" },
    { type: "Corridas", icon: "car" as const, title: "Casa → Shopping Norte", subtitle: "28 mai · R$ 15,20" },
    { type: "Envios", icon: "cube" as const, title: "Casa → Correios", subtitle: "21 mai · R$ 9,90" },
];

export default function TasksPage() {
    const [filter, setFilter] = useState("Todas");
    const openMap = () => router.push("/map");
    const visibleTrips = trips
        .filter((trip) => filter === "Todas" || trip.type === filter)
        .map(({ type, ...place }) => place);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Text style={styles.pageTitle}>Atividades</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
                {filters.map((item) => (
                    <Pressable
                        key={item}
                        style={[styles.chip, filter === item && styles.chipActive]}
                        onPress={() => setFilter(item)}
                    >
                        <Text style={[styles.chipText, filter === item && styles.chipTextActive]}>{item}</Text>
                    </Pressable>
                ))}
            </ScrollView>
            <SectionHeader title="Anteriores" />
            <SavedPlaces places={visibleTrips} onPress={openMap} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    content: {
        paddingTop: 50,
        paddingBottom: 120,
    },
    pageTitle: {
        fontSize: 26,
        fontWeight: "700",
        color: Colors.black,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    filters: {
        paddingHorizontal: 16,
        gap: 8,
        marginBottom: 24,
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: Colors.surface,
    },
    chipActive: {
        backgroundColor: Colors.black,
    },
    chipText: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black,
    },
    chipTextActive: {
        color: Colors.white,
    },
});