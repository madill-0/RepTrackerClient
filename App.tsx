import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Header from './Header';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const user="madill";

export default function App() {
  return (
    <>
    <Header user="madill"/>
  
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
  "tabBarShowLabel": false,
  "tabBarActiveTintColor": 'black',
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerShown: false,
      }}/>
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          headerShown: false,
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
        </>
  );
}

const styles = {
  navBar: {

  }
}