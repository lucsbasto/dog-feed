import { colors } from '@/theme/colors';
import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.profile}>
          <Image 
            source={{uri: "https://github.com/lucsbasto.png"}}
            style={styles.image}
          />
          <View style={{flex: 1, marginTop: 50, marginLeft: 20}}>
            <Text style={{color: "red", fontSize: 15 }}>
              Welcome
            </Text>
            <Text  style={{color: colors.white, fontSize: 20, fontWeight: 'bold'}}>
              Lucas Bastos
            </Text>
          </View>
          <View style={styles.notification}>
            <Ionicons name="notifications" size={30} color={colors.gray[700]}/>
          </View>
        </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 20
  },
  container: {
    width: '100%',
    height: '20%',
    marginTop: 0,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  notification: {
    borderRadius: 25, 
    backgroundColor: '#cecece', 
    height: 40, 
    width: 40,
     display: 'flex', 
     alignItems: 'center', 
     justifyContent: 'center',
     marginTop: 50,
     marginRight: 20
    }
})
