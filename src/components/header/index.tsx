import { colors } from '@/theme/colors';
import { MaterialIcons, Octicons } from "@expo/vector-icons";
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
          <View style={{flex: 1, marginTop: 20, marginLeft: 20}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: colors.stone[700], fontSize: 20, fontWeight: 'bold', marginEnd: 10 }}>
                Lucas Bastos
              </Text>
              <Octicons name="verified" size={24} color="silver" />
            </View>
          </View>
          <MaterialIcons name="logout" size={24} color="black" style={{marginTop: 20, marginRight: 10}}/>
        </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 20,
    marginTop: 20,
  },
  container: {
    width: '100%',
    height: 100,
    backgroundColor: colors.stone[100],
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profile: {
    flex: 1,
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
})
