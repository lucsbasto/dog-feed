import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { ImageType } from "../feeder/feeder";

const width = Dimensions.get('window').width;

const imageWidth = 1280;
const imageHeight = 720;

const idealHeight = (width / imageWidth) * imageHeight;
export default function SliderItem({ id, url }: ImageType) {
  return (
    <Image source={{ uri: url }} key={id} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: width * 0.95,
    height: idealHeight,
    borderWidth: 1,
    borderRadius: 10,
  }
});