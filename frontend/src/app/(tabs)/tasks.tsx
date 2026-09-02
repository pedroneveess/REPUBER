import {View, Text, StyleSheet} from "react-native";

export default function HomePage(){
    return (
        <View style={styles.container}>
            <Text>Tasks Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})