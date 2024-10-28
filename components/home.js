import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0B0A4C', '#4B169D']}
        style={styles.fondo}>

          <Text style={styles.titulo}>EDUPLAY </Text>
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