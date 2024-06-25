import { theme } from '@/theme';
import { LocationAccuracy, LocationObject, getCurrentPositionAsync, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function Home(){
  const  [location, setLocation] = useState<LocationObject | null>(null)
  const mapRef = useRef<MapView>(null)
  async function requestLocationPermissions(){
    const { granted } = await requestForegroundPermissionsAsync()
    if(granted){
      const currentPosition = await getCurrentPositionAsync()
      setLocation(currentPosition)
    }
  }

  useEffect(() => {
    requestLocationPermissions()
  }, [])

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response) => {
      setLocation(response)
      mapRef.current?.animateCamera({ center: response.coords })
    })
  }, [])

  return (
    <View style={styles.container}>
     { location &&
      <MapView 
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      style={styles.map}
      ref={mapRef}
      initialRegion={{
        latitude: -10.2060817, 
        longitude: -48.3401999,
        latitudeDelta: 0.005, 
        longitudeDelta: 0.005
      }}
      >
        <Marker
        coordinate={{latitude: -10.2060817, longitude: -48.3401999}}
        icon={require('@/assets/markers/custom_marker_empty.png')}
        />
      </MapView>
     }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
  map: {
    flex: 1,
    width: '100%',
  }
})