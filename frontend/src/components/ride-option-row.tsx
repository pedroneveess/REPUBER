import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/global/color-variants";

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle: string;
    price: string;
    selected: boolean;
    onPress: () => void;
};

export default function RideOptionRow({ icon, title, subtitle, price, selected, onPress }: Props) {
    return (
        <Pressable style={[styles.container, selected && styles.selected]} onPress={onPress}>
            <Ionicons name={icon} size={26} color={Colors.black} />
            <View style={styles.texts}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        padding: 12,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: "transparent",
        backgroundColor: Colors.background,
        marginBottom: 8,
    },
    selected: {
        borderColor: Colors.black,
        backgroundColor: Colors.white,
    },
    texts: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
        color: Colors.black,
    },
    subtitle: {
        fontSize: 13,
        color: Colors.textSecondary,
        marginTop: 2,
    },
    price: {
        fontSize: 15,
        fontWeight: "700",
        color: Colors.black,
    },
});