import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignUpStack from '../screens/Signup';
import SignUp from '../screens/Signup';
import Login from '../screens/Login';
import ApiStack from '../screens/apidata';
import BottomTabNavigator from './bottomtab';
import ApiPage from '../screens/apidata';
import AnimationPage from '../screens/animation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="SignUp Page" component={SignUp} />
      <Drawer.Screen name="Login Page" component={Login} />
      <Drawer.Screen name="Api Page" component={ApiPage} />
      <Drawer.Screen name="Animation Page" component={AnimationPage} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
