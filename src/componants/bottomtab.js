import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignUpStack from '../screens/Signup';
import ApiStack from '../screens/apidata';
import LoginStack from '../screens/Login';
import SignupIcon from '../images/s1.svg';
import LoginIcon from '../images/s2.svg';
import SignUp from '../screens/Signup';
import Login from '../screens/Login';
import ApiPage from '../screens/apidata';
import AnimationPage from '../screens/animation';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          //   let iconName;
          if (route.name === 'signUp') {
            return (
              <SignupIcon
                width={25}
                height={25}
                fill={focused ? 'blue' : 'black'}
              />
            );
          } else if (route.name === 'Login') {
            return (
              <LoginIcon
                width={25}
                height={25}
                fill={focused ? 'blue' : 'black'}
              />
            );
          } else if (route.name === 'ApiPage') {
            return (
              <LoginIcon
                width={25}
                height={25}
                fill={focused ? 'blue' : 'black'}
              />
            );
          } else if (route.name === 'AnimationPage') {
            return (
              <LoginIcon
                width={25}
                height={25}
                fill={focused ? 'blue' : 'black'}
              />
            );
          }
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="signUp" component={SignUp} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="ApiPage" component={ApiPage} />
      <Tab.Screen name="AnimationPage" component={AnimationPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
