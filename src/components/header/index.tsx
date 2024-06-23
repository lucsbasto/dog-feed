import { colors } from '@/theme/colors'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image 
            source={{uri: "https://github.com/lucsbasto.png"}}
            style={styles.image}
          />
          <Text style={{color: colors.white, fontSize: 15,}}>
            Welcome
          </Text>
          <Text  style={{color: colors.white, fontSize: 20, fontWeight: 'bold'}}>
            Lucas Bastos
          </Text>
        </View>
      </View>
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
    height: '25%',
    marginTop: 0,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  }
})
