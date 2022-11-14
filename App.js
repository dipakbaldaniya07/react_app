import React, {useState} from 'react';
import {View, Button, TextInput, Text, StyleSheet} from 'react-native';

import SignUp from './src/screens/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigator from './src/componants/drawer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
