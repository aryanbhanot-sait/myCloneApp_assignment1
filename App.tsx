import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.header}>
        <Image
          source={require('./assets/back.png')}
          style={{ width: 25, height: 25 }}
        />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: 'gray' }}>OOTD_EVERYDAY</Text>
          <Text style={{ flex: 1, fontWeight: 'bold', fontSize: 17 }}>Posts</Text>
        </View>
      </View>

      {/* Post Top Portion */}
      <View style={{ paddingTop: 10, justifyContent: 'space-between', flexDirection: 'row', width: '100%', paddingHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Image
            source={require('./assets/waterfall.png')}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
          <View style={{ paddingTop: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>ootd_everyday</Text>
            <Text style={{ flex: 1, fontSize: 12 }}>via frenchie_fry39</Text>
          </View>
        </View>
        <Image
          source={require('./assets/more.png')}
          style={{ width: 20, height: 20, marginLeft: 10 }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    height: 45,
  },
});
