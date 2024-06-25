import Carousel from "pinar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

type ImageType = {
  id: number;
  title?: string;
  rating?: number;
  description?: string;
  address?: string;
  image: any;
};

const data: ImageType[] = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    rating: 4,
    image: require("@/assets/dog-feeder-1.jpg")
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: require("@/assets/dog-feeder-2.jpg")
  },
  {
    id: 3,
    title: "Title 3",
    image: require("@/assets/dog-feeder-3.jpg")
  }
]
export default function Slider () {
  return (
    <View style={styles.container}>
      <Carousel 
      autoplay={true} 
      loop={true} 
      showsControls={true} 
      style={styles.carousel} 
      horizontal 
      dotStyle={styles.dotStyle}
      activeDotStyle={[styles.dotStyle, {backgroundColor: "white"}]}
      >
        {
          data.map(
            (item: ImageType) => (<Image source={item.image} key={item.id} style={styles.image} />)
          )
        }
      </Carousel>
    </View>
  );
} 

const styles = StyleSheet.create({
  dotStyle: {
    width: 30,
    height: 3,
    backgroundColor: 'silver',
    marginHorizontal: 2,
  },
  image: { 
    width: "100%", 
    height: 250,
    resizeMode: "cover",
    borderRadius: 10
  },
  container: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transparent'
  },
  carousel:  { 
    width: "100%", 
    height: "100%" 
  }
});