import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export default function JuegoColores() {
    return (
        <View>
            <Text>Juego colores</Text>
        </View>
    );
}