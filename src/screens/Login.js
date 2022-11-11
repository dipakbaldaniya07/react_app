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
const Login = ({route}) => {
  const data = route.params;
  const [Email, onChangeEmail] = useState();
  const [Password, onChangePassword] = useState();
  const [error, onError] = useState();
  let userError = '';
  return (
    <View style={styles.container}>
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
        placeholder="Enter Password"
        placeholderTextColor={'grey'}
        keyboardType="default"
        onChangeText={text => {
          onChangePassword(text);
        }}
        secureTextEntry={true}
      />
      <Button
        title="Submit"
        color={'blue'}
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
        }}
      />
      <Text>{error}</Text>
    </View>
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
  text: {
    padding: 30,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
