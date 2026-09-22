import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/global/color-variants";

type Props = {
    onBack: () => void;
    destination: string;
};

export default function MapSearchOverlay({ onBack, destination }: Props) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={onBack}>
                <Ionicons name="arrow-back" size={22} color={Colors.black} />
            </Pressable>
            <View style={styles.card}>
                <View style={styles.field}>
                    <View style={styles.originDot} />
                    <View style={styles.fieldTexts}>
                        <Text style={styles.fieldLabel}>Local de partida</Text>
                        <Text style={styles.fieldValue}>Localização atual</Text>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.field}>
                    <Ionicons name="search" size={18} color={Colors.black} />
                    <View style={styles.fieldTexts}>
                        <Text style={styles.fieldLabel}>Destino</Text>
                        <Text style={styles.fieldValue}>{destination}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 56,
        left: 16,
        right: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    backButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        shadowColor: "#000000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    card: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 6,
        elevation: 4,
        shadowColor: "#000000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    field: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 8,
    },
    originDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.green,
        marginLeft: 4,
    },
    fieldTexts: {
        flex: 1,
    },
    fieldLabel: {
        fontSize: 11,
        color: Colors.textSecondary,
    },
    fieldValue: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.black,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.border,
        marginLeft: 24,
    },
});