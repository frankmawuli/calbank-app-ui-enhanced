import React from "react";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F18C20",
        tabBarInactiveTintColor: "#6B7280", // inactive color (gray)
        tabBarLabelStyle: { fontSize: 12, marginBottom: 4 },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Feather name={focused ? "home" : "home"} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color, focused }) => (
            <Feather name={focused ? "grid" : "grid"} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name={focused ? "headphones" : "headphones"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name={focused ? "more-vertical" : "more-vertical"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
