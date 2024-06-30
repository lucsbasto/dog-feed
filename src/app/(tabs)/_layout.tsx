import { Avatar } from "@/components/avatar";
import { theme } from "@/theme";
import { Fontisto } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
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
              tabBarIcon: ({ color }) => <Avatar
                selected={color === theme.colors.white}
                source={{ uri: "https://github.com/lucsbasto.png" }}
              />
            }
          }
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Fontisto name="world-o" size={24} color={color} />
            )
          }}
        />
      </Tabs>
    </View>
  )
}