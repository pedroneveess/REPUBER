import { router } from "expo-router";
import { ScrollView, View, StyleSheet } from "react-native";
import HomeHeader from "@/components/home-header";
import SearchBar from "@/components/search-bar";
import QuickAction from "@/components/quick-action";
import SectionHeader from "@/components/section-header";
import RegularCard from "@/components/regular-card";
import SavedPlaces from "@/components/saved-places";

const suggestions = [
    { title: "20% de desconto", subtitle: "Válido nas próximas 3 corridas" },
    { title: "Reserve com antecedência", subtitle: "Garanta o carro na hora que quiser" },
    { title: "Uber Pass", subtitle: "Economia semanal em todas as corridas" },
];

const places = [
    { icon: "home" as const, title: "Casa", subtitle: "Rua das Flores, 123" },
    { icon: "briefcase" as const, title: "Trabalho", subtitle: "Av. Paulista, 1000" },
    { icon: "time" as const, title: "Centro", subtitle: "Recente · 2,4 km" },
];

export default function HomePage() {
    const openMap = () => router.push("/map");

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <HomeHeader />
            <View style={styles.search}>
                <SearchBar onPress={openMap} />
            </View>
            <View style={styles.actions}>
                <QuickAction icon="car" label="Corrida" onPress={openMap} />
                <QuickAction icon="package-variant" label="Entregas" />
                <QuickAction icon="calendar-clock" label="Reservar" />
                <QuickAction icon="key" label="Alugar" />
            </View>
            <SectionHeader title="Sugestões" actionLabel="Ver tudo" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
                {suggestions.map((item) => (
                    <RegularCard key={item.title} title={item.title} subtitle={item.subtitle} onPress={openMap} />
                ))}
            </ScrollView>
            <SectionHeader title="Destinos salvos" />
            <SavedPlaces places={places} onPress={openMap} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    content: {
        paddingBottom: 120,
    },
    search: {
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    carousel: {
        gap: 12,
        paddingHorizontal: 16,
        marginBottom: 24,
    },
});