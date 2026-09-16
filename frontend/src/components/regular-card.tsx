import {View, Text, Image, StyleSheet } from "react-native"

export default function RegularCard() {
    return (
        <View style={style.container}>
            <Image style={style.cover} source={require("../assets/icons/uber-3d-icon.png")}/>
            <Text style={style.title}>Ride</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dadadaff",
        borderStyle: "solid",
        borderRadius: 20,
        padding: 30,

    },
    title: {
        textDecorationStyle: "solid"
    },
    cover: {
        width: 60,
        height: 70,
    },
})