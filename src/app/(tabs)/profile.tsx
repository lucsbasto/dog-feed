import Header from '@/components/header';
import Slider from '@/components/slider';
import { theme } from '@/theme';
import { StyleSheet, View } from 'react-native';

export default function Profile(){
  return (
    <View style={styles.container}>
      <Header/>
      <Slider/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  }
})