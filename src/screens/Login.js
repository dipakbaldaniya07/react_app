import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Login = ({route}) => {
  const data = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>name : {data.name}</Text>
      <Text style={styles.text}>email : {data.email}</Text>
      <Text style={styles.text}>phone : {data.phone}</Text>
      <Text style={styles.text}>password : {data.password}</Text>
      <Text style={styles.text}>address : {data.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
  },
  input: {
    height: 50,
    margin: 20,
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
