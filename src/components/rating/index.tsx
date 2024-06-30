import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

const Rating = ({ rating }) => {
  const stars = [];
  const starCount = 5;

  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<FontAwesome name="star" key={`full-${i}`} size={20} color="orange" />);
  }

  if (rating % 1 !== 0) {
    stars.push(<FontAwesome name="star-half" key="half" size={20} color="orange" />);
  }

  while (stars.length < starCount) {
    stars.push(<FontAwesome name="star-o" key={`empty-${stars.length}`} size={20} color="orange" />);
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {stars}
    </View>
  );
};

export default Rating;
