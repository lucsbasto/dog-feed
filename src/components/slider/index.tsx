import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

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
  },
  {
    id: 4,
    title: "Title 3",
    image: require("@/assets/dog-feeder-3.jpg")
  },
  {
    id: 5,
    title: "Title 3",
    image: require("@/assets/dog-feeder-3.jpg")
  },
  {
    id: 6,
    title: "Title 3",
    image: require("@/assets/dog-feeder-3.jpg")
  },
]
const width = Dimensions.get('window').width;

const imageWidth = 1280;
const imageHeight = 720;

const idealHeight = (width / imageWidth) * imageHeight;
export default function SliderItem({item}: any) {
  return (
    <Image source={item.image} key={item.id} style={styles.image}/>
  )
}

const styles = StyleSheet.create({
  image: { 
    width: width, 
    height: idealHeight,
  }
});