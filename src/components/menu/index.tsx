import BottomSheet from '@gorhom/bottom-sheet';
import React, { forwardRef } from 'react';
import Slider from '../slider';
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
        <Slider/>
      </BottomSheet>
  );
})
