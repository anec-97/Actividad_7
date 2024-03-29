import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './src/components/CatComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
       <Cat nombre="garfield" raza="mexicano" foto="https://reactnative.dev/docs/assets/p_cat1.png"></Cat> 
       <Cat nombre="perro" raza="americano" foto="https://reactnative.dev/docs/assets/p_cat2.png"></Cat> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
