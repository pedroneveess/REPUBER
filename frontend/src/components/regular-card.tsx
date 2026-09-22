import { Pressable, Text, Image, StyleSheet } from "react-native";
import { Colors } from "@/global/color-variants";

type Props = {
    title: string;
    subtitle: string;
    onPress?: () => void;
};

export default function RegularCard({ title, subtitle, onPress }: Props) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.cover} source={require("../assets/icons/uber-3d-icon.png")} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 220,
        backgroundColor: Colors.surface,
        borderRadius: 16,
        padding: 16,
        gap: 6,
    },
    cover: {
        width: 48,
        height: 48,
        borderRadius: 12,
        marginBottom: 8,
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
        color: Colors.black,
    },
    subtitle: {
        fontSize: 13,
        color: Colors.textSecondary,
    },
});
