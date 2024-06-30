import React from 'react';
import { Marker } from 'react-native-maps';

export default function CustomMarker({ feedspot, onPress }: any) {
  return (
    <Marker
      key={feedspot.id.toString()}
      coordinate={{ latitude: feedspot.latitude, longitude: feedspot.longitude }}
      id={feedspot.id.toString()}
      title='teste'
      icon={require('@/assets/markers/custom_marker_empty.png')}
      onTouchEnd={() => onPress()}
      onPress={() => onPress()}
    />
  )
}