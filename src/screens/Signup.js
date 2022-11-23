import React, {useState} from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {ThemeContext} from '../componants/changetheme';
import {useContext} from 'react';
import {Colors, useTheme} from 'react-native-paper';

import CustomButton from '../componants/button';
import ErrorText from '../componants/text';
import Input from '../componants/textInput';
import {colors} from '../componants/themeContext';
import {useNavigation} from '@react-navigation/native';
const SignUp = () => {
  const [Name, onChangeName] = useState();
  const [Email, onChangeEmail] = useState();
  const [Phone, onChangePhone] = useState();
  const [Password, onChangePassword] = useState();
  const [C_password, onChangeC_password] = useState();
  const [Address, onChangeAddress] = useState();
  const [error, onError] = useState();
  let userError = '';

  const {theme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];

  const navigation = useNavigation();

  const register = () => {
    navigation.navigate('Login', {
      name: Name,
      email: Email,
      phone: Phone,
      password: Password,
      address: Address,
    });
  };

  return (
    <View style={[{backgroundColor: activeColor.primary, height: '100%'}]}>
      <ScrollView style={[{backgroundColor: activeColor.primary}]}>
        <Input
          placeholder="Enter Name"
          onChangeText={text => onChangeName(text)}
          keyboardType="default"
        />
        <Input
          placeholder="Enter Email"
          onChangeText={text => onChangeEmail(text)}
          keyboardType="default"
        />
        <Input
          placeholder="Enter mobile Number"
          onChangeText={text => onChangePhone(text)}
          keyboardType="number-pad"
          maxLength={10}
        />
        <Input
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={text => onChangePassword(text)}
          keyboardType="default"
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={text => {
            onChangeC_password(text);
            if (Password != text) {
              onError('confirm password does not match');
            } else {
              onError('');
            }
          }}
        />
        <ErrorText value={error}></ErrorText>

        <Input
          placeholder="Enter Address"
          onChangeText={text => onChangeAddress(text)}
          keyboardType="default"
        />

        <CustomButton
          title="submit"
          color={'blue'}
          onpress={() => {
            const data = {
              name: Name,
              email: Email,
              phone: Phone,
              password: Password,
              address: Address,
            };
            if (Password == C_password && Email != null && Password != null) {
              register();
            }
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 800,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    marginLeft: 20,
  },
});

export default SignUp;
