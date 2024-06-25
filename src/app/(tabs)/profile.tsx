import Badge from '@/components/badge';
import Header from '@/components/header';
import { theme } from '@/theme';
import { ScrollView, StyleSheet, View } from 'react-native';

const data = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: require("@/assets/badge.png")
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: require("@/assets/badge.png")
  },
  {
    id: 3,
    title: "Title 3",
    image: require("@/assets/badge.png")
  },
  {
    id: 4,
    title: "Title 3",
    image: require("@/assets/badge.png")
  },
  {
    id: 5,
    title: "Title 3",
    image: require("@/assets/badge.png")
  },
  {
    id: 6,
    title: "Title 3",
    image: require("@/assets/badge.png")
  },
]

export default function Profile(){
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={{overflow: 'visible'}}
      contentContainerStyle={{paddingHorizontal: 15, paddingTop: 15}}
      >
        {
          data.map(
            (item: any) => (<Badge key={item.id} {...item} />)
          )
        }
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[800],
  },
})