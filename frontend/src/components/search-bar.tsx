import { Pressable, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/global/color-variants";

type Props = {
    onPress: () => void;
};

export default function SearchBar({ onPress }: Props) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Ionicons name="search" size={20} color={Colors.black} />
            <Text style={styles.label}>Para onde?</Text>
            <View style={styles.divider} />
            <Ionicons name="time-outline" size={20} color={Colors.black} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.surface,
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 52,
        gap: 12,
    },
    label: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        color: Colors.black,
    },
    divider: {
        width: 1,
        height: 24,
        backgroundColor: Colors.border,
    },
});