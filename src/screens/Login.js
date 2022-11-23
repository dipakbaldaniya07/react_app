import React, {useState} from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Switch,
} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../componants/changetheme';
import CustomButton from '../componants/button';
import Input from '../componants/textInput';
import {DefaultTheme, DarkTheme, useRoute} from '@react-navigation/native';
import {colors} from '../componants/themeContext';

const Login = () => {
  const route = useRoute();
  const {theme, UpdateTheme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];

  const [Email, onChangeEmail] = useState();
  const [Password, onChangePassword] = useState();
  const [error, onError] = useState();
  const [IsEnable, SetIsEnabled] = useState(theme.mode === 'dark');

  let userError = '';

  const toggeleSwitch = () => {
    UpdateTheme();
    SetIsEnabled(previousState => !previousState);
  };
  return (
    <View
      style={[
        {
          height: '100%',
          backgroundColor: activeColor.primary,
        },
      ]}>
      <Input
        placeholder="Enter Email"
        onChangeText={text => onChangeEmail(text)}
        keyboardType="default"
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => onChangePassword(text)}
        keyboardType="default"
      />

      <Button
        title="submit"
        onPress={() => {
          if (Password == data.password && Email == data.email) {
            userError = 'login successfully';
            return onError(userError);
          } else if (Password != data.password) {
            userError = 'incorrect password';
            return onError(userError);
          } else if (Email != data.email) {
            userError = 'incorrect Email';
            return onError(userError);
          }
          console.log('hello');
        }}
      />
      <Button
        title="push"
        onPress={() => {
          console.warn(route.params);
        }}
      />
      <Text style={{color: activeColor.secondry}}>{error}</Text>
      <Switch
        style={{alignSelf: 'center', transform: [{scaleX: 1.4}, {scaleY: 1.4}]}}
        trackColor={{false: 'lightgrey', true: 'lightgreen'}}
        thumbColor={IsEnable ? 'green' : 'grey'}
        onValueChange={toggeleSwitch}
        value={IsEnable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 20,
    borderBottomWidth: 1,
  },
  text: {
    padding: 30,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});

export default Login;
