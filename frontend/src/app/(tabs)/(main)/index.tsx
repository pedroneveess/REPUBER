import RegularCard from "@/components/regular-card";
import {View, Text, StyleSheet} from "react-native";

export default function HomePage(){
    return (
        <View style={styles.container}>
            <Text>Mayara é muito linda Ass: admirador secreto rsrs</Text>
            <RegularCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
})