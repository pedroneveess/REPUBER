import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#9a9a9a",
        tabBarStyle: {
            position: "absolute",

            bottom: 20,
            left: 40,
            right: 40,

            borderRadius: 20,
            backgroundColor: "#ffffff",
            borderTopWidth: 0,
            elevation: 8,
            shadowColor: "#000000",
            shadowOpacity: 0.12,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            height: 56,
            paddingBottom: 6,
            paddingTop: 6,
        },
        tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="(main)"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="options"
        options={{
          title: "Opções",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-grid" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Atividades",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper-variant-outline" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Conta",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
