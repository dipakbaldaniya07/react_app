import React from 'react';
import {View, TextInput, Text} from 'react-native';

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  maxLength,
}) => {
  const {input} = styles;

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      keyboardType={keyboardType}
      style={input}
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
    />
  );
};

const styles = {
  input: {
    height: 50,
    margin: 20,
    borderBottomWidth: 1,
  },
};

export default Input;
