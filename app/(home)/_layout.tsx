// app/(home)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // for icons
import { useColorScheme, View } from 'react-native';

// Type definitions for tab configuration
interface TabBarConfig {
  activeColor: string;
  inactiveColor: string;
  backgroundColor: string;
  height: number;
  paddingBottom: number;
  labelStyle: {
    fontWeight: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    fontSize: number;
  };
}

// Constants for better maintainability
const TAB_BAR_CONFIG: TabBarConfig = {
  activeColor: '#8b8155',
  inactiveColor: '#aaa',
  backgroundColor: '#faf8f4',
  height: 70,
  paddingBottom: 6,
  labelStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hide the top bar if you want
        tabBarActiveTintColor: TAB_BAR_CONFIG.activeColor,
        tabBarInactiveTintColor: TAB_BAR_CONFIG.inactiveColor,
        tabBarStyle: {
          backgroundColor: TAB_BAR_CONFIG.backgroundColor,
          height: TAB_BAR_CONFIG.height,
          paddingBottom: TAB_BAR_CONFIG.paddingBottom,
        },
        tabBarLabelStyle: TAB_BAR_CONFIG.labelStyle,
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
        name= "AllBreedsDetails" // This refers to (tab)/AllBreedsDetails.jsx
        options= {{ href: null }}
      />
    </Tabs>
  );
}