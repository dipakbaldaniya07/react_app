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
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor={'grey'}
          keyboardType="default"
          onChangeText={text => {
            onChangeName(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          placeholderTextColor={'grey'}
          keyboardType="email-address"
          onChangeText={text => {
            onChangeEmail(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile Number"
          placeholderTextColor={'grey'}
          keyboardType="number-pad"
          onChangeText={text => {
            onChangePhone(text);
          }}
          maxLength={10}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor={'grey'}
          keyboardType="default"
          onChangeText={text => {
            onChangePassword(text);
          }}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={'grey'}
          keyboardType="default"
          onChangeText={text => {
            onChangeC_password(text);
          }}
          secureTextEntry={true}
        />
        <Text style={styles.error}>{error}</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          placeholderTextColor={'grey'}
          keyboardType="default"
          onChangeText={text => {
            onChangeAddress(text);
          }}
        />
        <Button
          title="Submit"
          color={'blue'}
          onPress={() => {
            if (Password == C_password) {
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
