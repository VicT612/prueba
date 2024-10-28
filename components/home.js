import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import {Text, Card, Button, Icon} from '@rneui/themed';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0B0A4C', '#4B169D']}
        style={styles.fondo}>
          <Text style={styles.titulo}>ELIGE UNA ACTIVIDAD</Text>
          <FlatList>

          </FlatList>


      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titulo:{
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});