// app/(tab)/_layout.jsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // for icons

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hide the top bar if you want
        tabBarActiveTintColor: '#8b8155',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {
          backgroundColor: '#faf8f4',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 14,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="paw"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="paw" color={color} size={size} />
          ),
        }}
      />
       <Tabs.Screen
        name="[breedId]" // This refers to (tab)/[breedId].jsx
        options={{
          href: null,
        }}
      />
    </Tabs>);}