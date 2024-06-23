import BottomSheet from '@gorhom/bottom-sheet';
import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { MenuProps } from './menu';
import { styles } from './styles';

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) =>{

  return (
      <BottomSheet
        ref={ref}
        index={0}
        snapPoints={[0.01, 600]}
        backgroundStyle={styles.container}
      >
        <View style={styles.content}>
          <View style= {styles.header}>
          </View>
        </View>
      </BottomSheet>
  );
})