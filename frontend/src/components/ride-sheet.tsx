import { useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RideOptionRow from "./ride-option-row";
import { Colors } from "@/global/color-variants";

type Props = {
    destination: string;
    distance: string;
    duration: string;
};

const rideOptions = [
    { icon: "car" as const, title: "UberX", subtitle: "Econômico · 4 lugares", price: "R$ 18,90" },
    { icon: "car-sports" as const, title: "Comfort", subtitle: "Mais espaço · 4 lugares", price: "R$ 25,50" },
    { icon: "shield-star" as const, title: "Black", subtitle: "Premium · 4 lugares", price: "R$ 42,00" },
];

export default function RideSheet({ destination, distance, duration }: Props) {
    const [selected, setSelected] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.handle} />
            <View style={styles.header}>
                <View>
                    <Text style={styles.destination}>{destination}</Text>
                    <Text style={styles.eta}>
                        {duration} · {distance}
                    </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.black} />
            </View>
            <View style={styles.options}>
                {rideOptions.map((option, index) => (
                    <RideOptionRow
                        key={option.title}
                        icon={option.icon}
                        title={option.title}
                        subtitle={option.subtitle}
                        price={option.price}
                        selected={selected === index}
                        onPress={() => setSelected(index)}
                    />
                ))}
            </View>
            <Pressable style={styles.cta}>
                <Text style={styles.ctaText}>Pedir {rideOptions[selected].title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 32,
        elevation: 12,
        shadowColor: "#000000",
        shadowOpacity: 0.18,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: -4 },
    },
    handle: {
        alignSelf: "center",
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: Colors.border,
        marginBottom: 14,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
    },
    destination: {
        fontSize: 17,
        fontWeight: "700",
        color: Colors.black,
    },
    eta: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginTop: 4,
    },
    options: {
        marginBottom: 10,
    },
    cta: {
        backgroundColor: Colors.black,
        borderRadius: 10,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
    ctaText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "700",
    },
});