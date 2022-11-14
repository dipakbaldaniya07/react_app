import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignUpStack from '../screens/Signup';
import LoginStack from '../screens/Login';
import BottomTabNavigator from './bottomtab';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="SignUp Page" component={SignUpStack} />
      <Drawer.Screen name="Login Page" component={LoginStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
