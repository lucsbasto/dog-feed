import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { ImageType } from "../feeder/feeder";

const width = Dimensions.get('window').width;

const imageWidth = 1280;
const imageHeight = 720;

const idealHeight = (width / imageWidth) * imageHeight;
export default function SliderItem(item: ImageType) {
  console.log(item)
  return (
    <Image source={{ uri: item.url }} key={item.id} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: idealHeight * 1.2,
  }
});