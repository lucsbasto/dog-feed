import { colors } from '@/theme/colors';
import { FontAwesome } from '@expo/vector-icons';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheetScrollViewMethods } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';
import React, { forwardRef, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ElevatedButton, OutlinedButton } from '../button';
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
    },
    {
      id: 4,
      title: "Title 4",
      image: require("@/assets/dog-feeder-4.jpg")
    },
    {
      id: 5,
      title: "Title 5",
      image: require("@/assets/dog-feeder-5.jpg")
    },
    {
      id: 6,
      title: "Title 6",
      image: require("@/assets/dog-feeder-6.jpg")
    },
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
            <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text>
              <FontAwesome name="star" size={20} color="orange"/>
              <FontAwesome name="star" size={20} color="orange" />
              <FontAwesome name="star" size={20} color="orange" />
              <FontAwesome name="star" size={20} color="orange" />
              <FontAwesome name="star-half-empty" size={20} color="orange"/>            
            </Text>
            <Text style={{marginLeft: 240}}>
              <FontAwesome name="heart" size={20} color={colors.red[600]} onPress={() => console.log('curtiu')}/>
              {/* <FontAwesome name="heart-o" size={20} color={colors.stone[600]} onPress={() => console.log('curtiu')}/> */}
            </Text>
            </View>
            <Text style={styles.title}>
              CEULP/ULBRA
            </Text>
            <Text style={styles.address}>
              Q 104 Sul Avenida LO 1, 10 - Plano Diretor Sul 
            </Text>
            <View style={styles.contact}>
              <Text style={{fontWeight: 'bold'}}>https://www.ulbra.br</Text>
              <Text style={{fontWeight: 'bold',  paddingLeft: 10}}>(63) 3219-8000</Text>
            </View>
            <Divider/>
            <View style={styles.button}>
              <ElevatedButton title="Reportar" onPress={() => alert('Reportar Pressionado')} />
              <OutlinedButton title="Encher" onPress={() => alert('Encher Pressionado')} />
            </View>
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
    backgroundColor: colors.stone[100],
    paddingBottom: 0,
    marginBottom: 0,
  },
  info: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: colors.stone[100],
    paddingBottom: 100
  },
  title: {
    fontSize: 20,
    color: colors.stone[950],
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
    fontSize: 11,
    color: colors.stone[700],
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  contact: {
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 20,
    paddingTop: 20
  }
});