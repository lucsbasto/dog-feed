import { theme } from '@/theme'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'


export default function Badge(item: any) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image}/>
    </View>
  )
}


export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 75,
    height: 75,
    margin: 5,
    backgroundColor: theme.colors.white,
  },
  image: {
    width: 75,
    height: 75
  }
})