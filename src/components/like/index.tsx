import { colors } from '@/theme/colors';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function Like({ initialLiked = false, onPress }) {
  const [isLiked, setIsLiked] = useState(initialLiked);

  const handleLikePress = () => {
    setIsLiked((prevState) => !prevState);
    if (onPress) {
      onPress(!isLiked);
    }
  };

  return (
    <FontAwesome
      name={isLiked ? "heart" : "heart-o"}
      size={20}
      color={isLiked ? colors.red[600] : colors.stone[600]}
      onPress={handleLikePress}
    />
  );
};
