import {View, Text, StyleSheet} from "react-native";

export default function HomePage(){
    return (
        <View style={styles.container}>
            <Text>Options Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})