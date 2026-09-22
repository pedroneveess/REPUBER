import { Pressable, Text, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/global/color-variants";

type Props = {
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    label: string;
    onPress?: () => void;
};

export default function QuickAction({ icon, label, onPress }: Props) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.circle}>
                <MaterialCommunityIcons name={icon} size={24} color={Colors.black} />
            </View>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: 72,
        gap: 8,
    },
    circle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.surface,
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        fontSize: 12,
        fontWeight: "500",
        color: Colors.black,
        textAlign: "center",
    },
});