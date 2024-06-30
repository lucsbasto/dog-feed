import feedspots from '@/assets/data/feedspots.json';
import { FeedspotInfo } from '@/components/feeder';
import { FeedspotTypes } from '@/components/feeder/feeder';
import CustomMarker from '@/components/marker';
import { theme } from '@/theme';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { LocationAccuracy, LocationObject, getCurrentPositionAsync, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { WithTimingConfig } from 'react-native-reanimated';

export default function Home() {
  const [selectedFeedspot, setSelectedFeedspot] = useState<FeedspotTypes | null>(null)
  const [location, setLocation] = useState<LocationObject | null>()
  const bottomSheetRef = useRef<BottomSheet>(null);
  const mapRef = useRef<MapView>(null)
  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync()
    if (granted) {
      const currentPosition = await getCurrentPositionAsync()
      setLocation(currentPosition)
    }
  }
  function onMarkerPress() {
    bottomSheetRef.current?.snapToIndex(1)
    setSelectedFeedspot(feedspots.locations[0])
  }
  function onMapPress() {
    const animateConfig: WithTimingConfig = {
      duration: 200,
    }
    bottomSheetRef.current?.snapToIndex(0, animateConfig)
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
      {location &&
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          style={styles.map}
          ref={mapRef}
          onPress={() => { onMapPress() }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {
            feedspots.locations.map((feedspot) => {
              return (
                <CustomMarker key={feedspot.id} feedspot={feedspot} onPress={() => onMarkerPress()} />
              )
            })
          }
        </MapView>
      }
      {selectedFeedspot && <FeedspotInfo ref={bottomSheetRef} {...selectedFeedspot} />}
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
    height: '100%',
  }
})