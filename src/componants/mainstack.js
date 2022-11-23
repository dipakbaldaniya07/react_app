import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../screens/Signup';
import Login from '../screens/Login';
import AnimationPage from '../screens/animation';
import Apipage from '../screens/apidata';
import {colors} from './themeContext';
import {useContext} from 'react';
import {ThemeContext} from './changetheme';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const {theme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: activeColor.appbar,
      elevation: 5,
      shadowOpacity: 5,
    },

    headerTintColor: activeColor.secondry,
    headerBackTitle: 'Back',
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SignupPage" component={SignUp} />
    </Stack.Navigator>
  );
};

const LoginStackNavigator = () => {
  const {theme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: activeColor.appbar,
      elevation: 5,
      shadowOpacity: 5,
    },

    headerTintColor: activeColor.secondry,
    headerBackTitle: 'Back',
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="LoginPage" component={Login} />
    </Stack.Navigator>
  );
};

const ApiStackNavigator = () => {
  const {theme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: activeColor.appbar,
      elevation: 5,
      shadowOpacity: 5,
    },

    headerTintColor: activeColor.secondry,
    headerBackTitle: 'Back',
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Apipage" component={Apipage} />
    </Stack.Navigator>
  );
};

const AnimationStackNavigator = () => {
  const {theme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: activeColor.appbar,
      elevation: 5,
      shadowOpacity: 5,
    },

    headerTintColor: activeColor.secondry,
    headerBackTitle: 'Back',
  };

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Animationpage" component={AnimationPage} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  LoginStackNavigator,
  ApiStackNavigator,
  AnimationStackNavigator,
};
