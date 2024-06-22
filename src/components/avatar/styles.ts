import { theme } from '@/theme';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35,
    borderRadius: 24,
  },
  selected: {
    borderWidth: 3,
    borderColor: theme.colors.white
  }
})