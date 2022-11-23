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
import {colors} from './themeContext';
import {MainStackNavigator} from './mainstack';
import {LoginStackNavigator} from './mainstack';
import {AnimationStackNavigator} from './mainstack';
import {ApiStackNavigator} from './mainstack';
import {ThemeContext} from './changetheme';
import {useContext} from 'react';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {theme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: activeColor.tabbar,
        },
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          //   let iconName;
          if (route.name === 'signUp') {
            return (
              <SignupIcon
                width={25}
                height={25}
                fill={focused ? '#3AB7FF' : 'grey'}
              />
            );
          } else if (route.name === 'Login') {
            return (
              <LoginIcon
                width={25}
                height={25}
                fill={focused ? '#3AB7FF' : 'grey'}
              />
            );
          } else if (route.name === 'ApiPage') {
            return (
              <LoginIcon
                width={25}
                height={25}
                fill={focused ? '#3AB7FF' : 'grey'}
              />
            );
          } else if (route.name === 'Animation') {
            return (
              <LoginIcon
                width={25}
                height={25}
                fill={focused ? '#3AB7FF' : 'grey'}
              />
            );
          }
        },
        tabBarActiveTintColor: '#3AB7FF',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="signUp" component={MainStackNavigator} />
      <Tab.Screen name="Login" component={LoginStackNavigator} />
      <Tab.Screen name="ApiPage" component={ApiStackNavigator} />
      <Tab.Screen name="Animation" component={AnimationStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
