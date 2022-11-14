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
import CustomButton from '../componants/button';
import Input from '../componants/textInput';
const Login = ({route}) => {
  const data = route.params;
  const [Email, onChangeEmail] = useState();
  const [Password, onChangePassword] = useState();
  const [error, onError] = useState();
  let userError = '';

  return (
    <View>
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
      <CustomButton
        title="Submit"
        style={styles.button}
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
