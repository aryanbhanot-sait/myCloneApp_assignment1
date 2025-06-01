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
      <View style={styles.action}>
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

      {/* Post Image */}
      <Image
        source={require('./assets/person.png')}
        style={{ width: '100%', height: 400, marginTop: 10 }}
      />

      {/* Post Actions */}
      <View style={styles.action}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/heart.png')}
            style={{ width: 25, height: 25 }}
          />
          <Image
            source={require('./assets/comment.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
          <Image
            source={require('./assets/send.png')}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
        </View>
        <Image
          source={require('./assets/bookmark.png')}
          style={{ width: 25, height: 25, marginLeft: 10 }}
        />
      </View>

      {/* Post Likes and Comments */}
      <View style={[styles.action, { justifyContent: 'flex-start' }]}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('./assets/people1.png')}
            style={[styles.likeImage, { marginLeft: 0 }]}
          />
          <Image
            source={require('./assets/people2.png')}
            style={styles.likeImage}
          />
          <Image
            source={require('./assets/people3.png')}
            style={styles.likeImage}
          />
        </View>
        <Text style={{ marginLeft: 10 }}>Liked by </Text>
        <Text style={{ fontWeight: 'bold' }}>paisley.print.48 </Text>
        <Text>and </Text>
        <Text style={{ fontWeight: 'bold' }}>7 others</Text>
      </View>

      {/* Top light grey line */}
      <View style={{ bottom: 70, position: 'absolute', height: 1, backgroundColor: '#e0e0e0', width: '100%' }} />

      {/* Footer */}
      <View style={[styles.action, { bottom: 30, position: 'absolute' }]}>
        <Image
          source={require('./assets/home.png')}
          style={{ width: 25, height: 25, marginRight: 10 }}
        />
        <Image
          source={require('./assets/search.png')}
          style={{ width: 25, height: 25, marginRight: 10 }}
        />
        <Image
          source={require('./assets/reel.png')}
          style={{ width: 25, height: 25, marginRight: 10 }}
        />
        <Image
          source={require('./assets/shop.png')}
          style={{ width: 25, height: 25, marginRight: 10 }}
        />
        <Image
          source={require('./assets/profile.png')}
          style={{ width: 25, height: 25, marginRight: 10 }}
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
  action: {
    paddingTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20
  },
  likeImage: {
    width: 25,
    height: 25,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,
    zIndex: 1,
    marginLeft: -10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 1.41,
    elevation: 2
  }
});
