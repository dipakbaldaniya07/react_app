import React, {useState} from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
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
    <SafeAreaView style={styles.container}>
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
          onChangeText={text => onChangeC_password(text)}
          keyboardType="default"
        />
        <Text style={styles.error}>{error}</Text>

        <Input
          placeholder="Enter Address"
          onChangeText={text => onChangeAddress(text)}
          keyboardType="default"
        />
        <Button
          title="Submit"
          color={'blue'}
          onPress={() => {
            if (Password == C_password && Email != null && Password != null) {
              userError = '';
              onError(userError);
              navigation.navigate('Login', {
                name: Name,
                email: Email,
                phone: Phone,
                password: Password,
                address: Address,
              });
            } else if (Password != C_password) {
              userError = 'confirm password does not match';
              return onError(userError);
            } else if (Password == C_password) {
              return onError(userError);
            }
            console.log(`error : ${error}`);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: '100%',
    width: '100%',
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
