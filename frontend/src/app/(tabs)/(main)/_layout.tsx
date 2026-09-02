import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000000",
        tabBarPosition: "top",
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
            
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Uber",
          tabBarIcon: () => (
            <Image
              source={require("../../../assets/icons/uber-3d-icon.png")}
              style={{
                width: 28,
                height: 28,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shipments"
        options={{
          title: "Envios",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
