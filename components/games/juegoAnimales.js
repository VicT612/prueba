import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text, View, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

export default function JuegoAnimales() {
    return (
        <View style={styles.container}>
            <Text>Juego Animales</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});