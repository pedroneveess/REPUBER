import { View, Text, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/global/color-variants";

export default function HomeHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.avatar}>
                    <MaterialCommunityIcons name="account" size={22} color={Colors.black} />
                </View>
                <Text style={styles.greeting}>Olá, usuário</Text>
            </View>
            <View style={styles.actions}>
                <Pressable style={styles.iconButton}>
                    <MaterialCommunityIcons name="bell-outline" size={22} color={Colors.black} />
                </Pressable>
                <Pressable style={styles.iconButton}>
                    <MaterialCommunityIcons name="shield-account-outline" size={22} color={Colors.black} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.surface,
        alignItems: "center",
        justifyContent: "center",
    },
    greeting: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.black,
    },
    actions: {
        flexDirection: "row",
        gap: 8,
    },
    iconButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.surface,
        alignItems: "center",
        justifyContent: "center",
    },
});
