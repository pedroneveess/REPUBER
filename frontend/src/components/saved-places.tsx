import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/global/color-variants";

type Place = {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle: string;
};

type Props = {
    places: Place[];
    onPress: (place: Place) => void;
};

export default function SavedPlaces({ places, onPress }: Props) {
    return (
        <View style={styles.container}>
            {places.map((place, index) => (
                <Pressable
                    key={place.title}
                    style={[styles.row, index < places.length - 1 && styles.divider]}
                    onPress={() => onPress(place)}
                >
                    <View style={styles.iconCircle}>
                        <Ionicons name={place.icon} size={18} color={Colors.black} />
                    </View>
                    <View style={styles.texts}>
                        <Text style={styles.title}>{place.title}</Text>
                        <Text style={styles.subtitle}>{place.subtitle}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color={Colors.textSecondary} />
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        backgroundColor: Colors.background,
        borderRadius: 16,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 14,
        gap: 12,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    texts: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: "600",
        color: Colors.black,
    },
    subtitle: {
        fontSize: 13,
        color: Colors.textSecondary,
        marginTop: 2,
    },
});