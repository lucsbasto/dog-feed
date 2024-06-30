import { colors } from '@/theme/colors';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BottomSheetScrollViewMethods } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';
import React, { forwardRef, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ElevatedButton, OutlinedButton } from '../button';
import Like from '../like';
import Rating from '../rating';
import SliderItem from '../slider';
import { FeedspotTypes, ImageType } from './feeder';

export const FeedspotInfo = forwardRef<BottomSheet, FeedspotTypes>((feedspot, ref) => {
  const sheetRef = useRef<BottomSheetScrollViewMethods>(null);

  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, '70%']}
      backgroundStyle={styles.bottomSheetContainer}
      handleIndicatorStyle={{ backgroundColor: '#000', width: 200, height: 3, borderRadius: 5, alignSelf: 'center' }}
      enablePanDownToClose={true}
    >
      <BottomSheetScrollView

        ref={sheetRef}
        snapToInterval={width}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={true}
        horizontal
        style={styles.scrollViewContainer}
      >
        {feedspot.images?.map((item: ImageType) => {
          return (
            <View key={item.id} style={styles.item}>
              <SliderItem {...item} />
            </View>
          )
        })}
      </BottomSheetScrollView>
      <View style={styles.info}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Rating rating={2.5} />
          <Text style={{ marginLeft: 240 }}>
            <Like initialLiked={false} onPress={(liked) => console.log(liked ? 'curtiu' : 'não curtiu')} />
          </Text>
        </View>
        <Text style={styles.title}>{feedspot.title}</Text>
        <Text style={styles.address}>{feedspot.address}</Text>
        <View style={styles.contact}>
          <Text style={{ fontWeight: 'bold' }}>{feedspot?.contacts?.email}</Text>
          <Text style={{ fontWeight: 'bold' }}>{feedspot?.contacts?.phone}</Text>
        </View>
        <Divider />
        <View style={styles.button}>
          <ElevatedButton title="Reportar" onPress={() => alert('Reportar')} />
          <OutlinedButton title="Encher" onPress={() => alert('Encher')} />
        </View>
      </View>
    </BottomSheet>
  );
});

const Divider = () => {
  return <View style={{ marginTop: 30, marginRight: 20, height: 2, backgroundColor: "#000" }} />;
};

const imageWidth = 1280;
const imageHeight = 720;
const width = Dimensions.get('window').width;

const idealHeight = (width / imageWidth) * imageHeight;

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
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 20,
    paddingTop: 20,
  },
  item: {
    margin: 10,
  },
});
