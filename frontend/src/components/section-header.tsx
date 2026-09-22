import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "@/global/color-variants";

type Props = {
    title: string;
    actionLabel?: string;
    onAction?: () => void;
};

export default function SectionHeader({ title, actionLabel, onAction }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {actionLabel ? (
                <Pressable onPress={onAction} hitSlop={8}>
                    <Text style={styles.action}>{actionLabel}</Text>
                </Pressable>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.black,
    },
    action: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.textSecondary,
    },
});
