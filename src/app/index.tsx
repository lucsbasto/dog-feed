import { theme } from "@/theme";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Splash(){
  const logoScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);
  const dimensions = useWindowDimensions();

  const logoAnimatedStypes = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { translateY: logoPositionY.value }
    ]
  }))

  function logoAnimation(){
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.7),
      withTiming(1, undefined, (finished) => {
        if(finished){
          logoPositionY.value = withSequence(
            withTiming(200, {duration: 400}), 
            withTiming(-dimensions.height, {duration: 600})
          )

          runOnJS(onEndSplash)()
        }
      }),
    );
  }
  function onEndSplash() {
    setTimeout(() => {router.push('/(tabs)')}, 2000)
  }

  useEffect(() => {
    logoAnimation()
  }, [])

  return <View style={styles.container}>
    <Animated.Image 
      source={require("@/assets/logo.png")} 
      style={[styles.logo, logoAnimatedStypes]}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 130,
    height: 130,
  }
})