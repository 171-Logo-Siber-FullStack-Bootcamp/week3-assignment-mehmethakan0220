import React from 'react';
import {Text,View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import RegisScreen from './screens/RegisScreen';
import PostsScreen from './screens/PostsScreen';
import UsersScreen from './screens/UsersScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home'
                : 'md-home-outline';
            } else if (route.name === 'SignIn') {
              iconName = focused ? 'md-log-in' : 'md-log-in';
            }else if(route.name ==="SignUp"){
              iconName = focused ? 'logo-tux':'logo-tux';
            }else if(route.name =="Posts"){
              iconName = focused ? 'md-cloud-done':'md-cloud-download';
            }else if(route.name = "Users"){
              iconName = focused ? 'md-people':'md-people';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })} >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="SignIn" component={LoginScreen}/>
      <Tab.Screen name="SignUp" component={RegisScreen}/>
      <Tab.Screen name="Posts" component={PostsScreen}/>
      <Tab.Screen name="Users" component={UsersScreen}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}
