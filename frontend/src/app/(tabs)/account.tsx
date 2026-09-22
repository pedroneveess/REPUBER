import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import SavedPlaces from "@/components/saved-places";
import { Colors } from "@/global/color-variants";

const menu = [
    { icon: "receipt" as const, title: "Carteira", subtitle: "Cartões e formas de pagamento" },
    { icon: "gift" as const, title: "Promoções", subtitle: "Cupons e créditos" },
    { icon: "shield-checkmark" as const, title: "Privacidade", subtitle: "Dados e segurança" },
    { icon: "help-circle" as const, title: "Ajuda", subtitle: "Central de atendimento" },
    { icon: "settings" as const, title: "Configurações", subtitle: "Preferências do app" },
];

export default function AccountPage() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Text style={styles.pageTitle}>Conta</Text>
            <View style={styles.profile}>
                <View style={styles.avatar}>
                    <MaterialCommunityIcons name="account" size={34} color={Colors.black} />
                </View>
                <View style={styles.profileTexts}>
                    <Text style={styles.name}>Usuário REPUBER</Text>
                    <Text style={styles.email}>usuario@repuber.com</Text>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>5,0</Text>
                        <Ionicons name="star" size={13} color={Colors.black} />
                    </View>
                </View>
            </View>
            <View style={styles.shortcuts}>
                <Pressable style={styles.shortcut}>
                    <Ionicons name="wallet" size={20} color={Colors.black} />
                    <Text style={styles.shortcutText}>Carteira</Text>
                </Pressable>
                <Pressable style={styles.shortcut}>
                    <Ionicons name="help-circle" size={20} color={Colors.black} />
                    <Text style={styles.shortcutText}>Ajuda</Text>
                </Pressable>
            </View>
            <View style={styles.menu}>
                <SavedPlaces places={menu} onPress={() => {}} />
            </View>
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
    profile: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: Colors.surface,
        alignItems: "center",
        justifyContent: "center",
    },
    profileTexts: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.black,
    },
    email: {
        fontSize: 13,
        color: Colors.textSecondary,
        marginTop: 2,
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 6,
        alignSelf: "flex-start",
        backgroundColor: Colors.surface,
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    ratingText: {
        fontSize: 13,
        fontWeight: "700",
        color: Colors.black,
    },
    shortcuts: {
        flexDirection: "row",
        gap: 12,
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    shortcut: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: Colors.surface,
        borderRadius: 12,
        paddingVertical: 14,
    },
    shortcutText: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black,
    },
    menu: {
        marginTop: 4,
    },
});