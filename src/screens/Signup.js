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
import CustomButton from '../componants/button';
import ErrorText from '../componants/text';
import Input from '../componants/textInput';

const SignUp = ({navigation}) => {
  const [Name, onChangeName] = useState();
  const [Email, onChangeEmail] = useState();
  const [Phone, onChangePhone] = useState();
  const [Password, onChangePassword] = useState();
  const [C_password, onChangeC_password] = useState();
  const [Address, onChangeAddress] = useState();
  const [error, onError] = useState();
  let userError = '';

  return (
    <View style={styles.container}>
      <ScrollView>
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
              onError('confirm pass word does not match');
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
            if (Password == C_password && Email != null && Password != null) {
              navigation.navigate('Login', {
                name: Name,
                email: Email,
                phone: Phone,
                password: Password,
                address: Address,
              });
            }
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 20,
    borderBottomWidth: 1,
  },
  error: {
    color: 'red',
    marginLeft: 20,
  },
});

export default SignUp;
