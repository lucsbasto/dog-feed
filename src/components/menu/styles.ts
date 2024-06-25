import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
    borderTopLeftRadius: 20,
  },
  content: {
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
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 24,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})