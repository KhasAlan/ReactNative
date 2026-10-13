import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs >
      <Tabs.Screen name="home" options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: () => (
          <Ionicons name="home" size={24} color="black" />
        )
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: () => (
          <Ionicons name="person" size={24} color="black" />
        )
      }} />
      <Tabs.Screen name="settings" options={{
        title: 'Settings',
        headerShown: false,
        
        href: null
      }} />
    </Tabs>
  );
}