import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export default function JuegoNumeros() {
    return (
        <View>
            <Text>Juego numeros</Text>
        </View>
    );
}