import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export default function JuegoFiguras() {
    return (
        <View>
            <Text>Juego figuras</Text>
        </View>
    );
}