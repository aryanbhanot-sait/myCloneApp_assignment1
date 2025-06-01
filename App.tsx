import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/back.png')}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
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
