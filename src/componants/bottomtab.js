import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignUpStack from '../screens/Signup';
import LoginStack from '../screens/Login';
import IconData from '../images/s1.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          //   let iconName;
          //   if (route.name === 'Signup') {
          //     iconName = 'home';
          //   } else if (route.name === 'Login') {
          //     iconName = 'gear';
          //   }

          return <IconData width={25} height={25} fill={'black'} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="signUp" component={SignUpStack} />
      <Tab.Screen name="Login" component={LoginStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
