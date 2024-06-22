import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    height: 300,
    width: "100%",
  },
  header: {
    flexDirection: "row"
  },
  title: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 24,
    color: theme.colors.white,
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  }
})