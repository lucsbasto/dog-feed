import { Avatar } from "@/components/avatar";
import { FeederInfo } from "@/components/feeder";
import { theme } from "@/theme";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import BottomSheet from '@gorhom/bottom-sheet';
import { Tabs } from "expo-router";
import { useRef } from "react";
import { View } from "react-native";


export default function TabLayout(){
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);
  return (
    <View style={{flex: 1}}>
      <Tabs screenOptions={
        {
          headerShown: false, 
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray[600],
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black,
          }
        }
        }>
        <Tabs.Screen name="profile" 
        options={
          {
            tabBarIcon: ({color}) => <Avatar 
            selected ={color=== theme.colors.white}
            source={{uri: "https://github.com/lucsbasto.png"}}
            />
          }
        }
        />
        <Tabs.Screen name="menu" 
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="plus" size={size} color={color}/>
          )
        }}
        listeners={
          () => ({
            tabPress: (evt) => {
              evt.preventDefault()
              handleBottomSheetOpen()
            }
          })
        }
        />
         <Tabs.Screen 
          name="index" 
          options={{
            tabBarIcon: ({size, color}) => (
              <Fontisto name="world-o" size={24} color={color} />
            )
          }} 
        />
      </Tabs>
      <FeederInfo ref={bottomSheetRef} onClose={() => { handleBottomSheetClose() }}/>
    </View>
  )
}