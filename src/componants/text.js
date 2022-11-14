import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const ErrorText = ({value}) => {
  const {input} = styles;

  return <Text style={input}>{value}</Text>;
};

styles = {
  input: {
    color: 'red',
    fontWeight: 'bold',
  },
};

export default ErrorText;
