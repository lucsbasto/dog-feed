import { FontAwesome } from '@expo/vector-icons';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheetScrollViewMethods } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';
import React, { forwardRef, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SliderItem from '../slider';
import { MenuProps } from './menu';

export const FeederInfo = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) =>{
  const width = Dimensions.get('window').width;
  const data = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      rating: 4,
      image: require("@/assets/dog-feeder-1.jpg")
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      image: require("@/assets/dog-feeder-2.jpg")
    },
    {
      id: 3,
      title: "Title 3",
      image: require("@/assets/dog-feeder-3.jpg")
    }
  ]

  const sheetRef = useRef<BottomSheetScrollViewMethods>(null);

  return (
      <BottomSheet
        ref={ref}
        index={0}
        snapPoints={[0.01, '50%', '70%']}
        backgroundStyle={styles.bottomSheetContainer}
        handleIndicatorStyle={{backgroundColor: '#000', width: 200, height: 3, borderRadius: 5, alignSelf: 'center'}}
      >
        <BottomSheetScrollView
          ref={sheetRef}
          showsHorizontalScrollIndicator={true}
          horizontal
        >
          {
            data.map((item) => (<SliderItem key={item.id} item={item}/>))
          }
          </BottomSheetScrollView>
          <View style={styles.info}>
            <Text>
              <FontAwesome name="star" size={20} color="orange" />
              <FontAwesome name="star" size={20} color="orange" />
              <FontAwesome name="star" size={20} color="orange" />
              <FontAwesome name="star" size={20} color="orange" />
              <FontAwesome name="star-half-empty" size={20} color="orange" />            
            </Text>
            <Text style={styles.title}>
              CEULP/ULBRA
            </Text>
            <Text style={styles.address}>
              Q 104 Sul Avenida LO 1, 10 - Plano Diretor Sul 
            </Text>
            <Text style={styles.city}>
              Palmas - TO, 77020-018
            </Text>
            <Text style={styles.contact}>
              <Text>https://www.ulbra.br</Text>
              <Text>(63) 3219-8000</Text>
            </Text>
            <Divider/>
          </View>
      </BottomSheet>
  );
})

const Divider = () => {
  return (
    <View style={{marginTop: 30, marginRight: 20, height: 3, backgroundColor:"#000"}}/>
  )
}


const styles = StyleSheet.create({
  bottomSheetContainer: {
    display: 'flex',
    backgroundColor: 'blue',
    paddingBottom: 0,
    marginBottom: 0,
  },
  info: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
    paddingBottom: 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  address: {
    paddingTop: 15,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  city: {
    paddingTop: 5,
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  contact: {
    paddingTop: 5,
    display: 'flex',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    flexDirection: 'column'
  },
});