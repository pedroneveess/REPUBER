import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Colors} from "@/global/color-variants"


export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000000",

        tabBarStyle: {
            position: "absolute",

            bottom: 20,
            left: 40,
            right: 40,

            borderRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="(main)"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="options"
        options={{
          title: "Opções",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Atividades",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper-variant-outline" size={20} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Conta",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={20} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
