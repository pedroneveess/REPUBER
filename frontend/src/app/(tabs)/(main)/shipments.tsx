import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SectionHeader from "@/components/section-header";
import SavedPlaces from "@/components/saved-places";
import { Colors } from "@/global/color-variants";

const recent = [
    { icon: "cube" as const, title: "Caixa pequena", subtitle: "Entregue · Hoje, 14:30" },
    { icon: "cube" as const, title: "Documentos", subtitle: "A caminho · Chega 18:00" },
    { icon: "cube" as const, title: "Encomenda", subtitle: "Coletada · Ontem, 09:15" },
];

export default function ShipmentsPage() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Text style={styles.pageTitle}>Envios</Text>
            <View style={styles.hero}>
                <View style={styles.heroIcon}>
                    <MaterialCommunityIcons name="package-variant" size={28} color={Colors.white} />
                </View>
                <Text style={styles.heroTitle}>Envie qualquer coisa</Text>
                <Text style={styles.heroSubtitle}>Peça uma coleta em minutos e acompanhe em tempo real.</Text>
                <Pressable style={styles.heroButton}>
                    <Text style={styles.heroButtonText}>Enviar agora</Text>
                </Pressable>
            </View>
            <SectionHeader title="Recentes" />
            <SavedPlaces places={recent} onPress={() => {}} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    content: {
        paddingTop: 8,
        paddingBottom: 120,
    },
    pageTitle: {
        fontSize: 26,
        fontWeight: "700",
        color: Colors.black,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    hero: {
        marginHorizontal: 16,
        backgroundColor: Colors.background,
        borderRadius: 16,
        padding: 20,
        marginBottom: 28,
    },
    heroIcon: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: Colors.black,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14,
    },
    heroTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.black,
    },
    heroSubtitle: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginTop: 6,
        marginBottom: 16,
    },
    heroButton: {
        backgroundColor: Colors.black,
        borderRadius: 10,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
    },
    heroButtonText: {
        color: Colors.white,
        fontSize: 15,
        fontWeight: "700",
    },
});