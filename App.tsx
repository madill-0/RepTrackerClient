import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as SecureStore from 'expo-secure-store';
import Header from './Header';
import RtClient from './service/RepTrackerApiClient';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';

const Tab = createBottomTabNavigator();

async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}
const getValueFor = async (key: string) => {
  const result = await SecureStore.getItemAsync(key);
  if (result) {
    return (result);
  }
  return null;
};

export default function App() {

  SecureStore.deleteItemAsync('user');
  const c =  new RtClient("http://ec2-3-85-25-143.compute-1.amazonaws.com:3000");
  c.login('madill', 'test');

  const [user, setUser] = useState();
  useEffect(() => {
    getValueFor('user').then((res) => setUser(res));
  })
  console.log(user)
  return (
    <>      
    <Header user={user} />
    {!user && <LoginScreen setUser={setUser} /> } 
    {user &&
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}
        >
 

    
          <>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
              headerShown: false,
            }}
          />
          </>
        </Tab.Navigator>
      </NavigationContainer>}

    </>
  );
}

const styles = {
  navBar: {

  },
};
