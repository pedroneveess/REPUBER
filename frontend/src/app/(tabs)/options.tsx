import { ScrollView, View, Text, StyleSheet } from "react-native";
import QuickAction from "@/components/quick-action";
import SectionHeader from "@/components/section-header";
import SavedPlaces from "@/components/saved-places";
import { Colors } from "@/global/color-variants";

const services = [
    { icon: "car" as const, label: "Corrida" },
    { icon: "package-variant" as const, label: "Entregas" },
    { icon: "calendar-clock" as const, label: "Reservar" },
    { icon: "key" as const, label: "Alugar" },
    { icon: "moped" as const, label: "Moto" },
    { icon: "percent" as const, label: "Promoções" },
];

const settings = [
    { icon: "receipt" as const, title: "Pagamento", subtitle: "Cartões e carteira" },
    { icon: "shield-checkmark" as const, title: "Privacidade", subtitle: "Controle de dados e segurança" },
    { icon: "help-circle" as const, title: "Ajuda", subtitle: "Central de suporte" },
    { icon: "settings" as const, title: "Configurações", subtitle: "Preferências do app" },
];

export default function OptionsPage() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Text style={styles.pageTitle}>Opções</Text>
            <View style={styles.grid}>
                {services.map((service) => (
                    <QuickAction key={service.label} icon={service.icon} label={service.label} />
                ))}
            </View>
            <SectionHeader title="Gerenciar" />
            <SavedPlaces places={settings} onPress={() => {}} />
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
        marginBottom: 20,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: 20,
        paddingHorizontal: 16,
        marginBottom: 28,
    },
});