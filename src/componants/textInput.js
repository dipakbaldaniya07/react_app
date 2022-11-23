import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {colors} from './themeContext';
import {ThemeContext} from './changetheme';
import {useContext} from 'react';

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  maxLength,
}) => {
  const {input} = styles;
  const {theme} = useContext(ThemeContext);
  let activeColor = colors[theme.mode];

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      keyboardType={keyboardType}
      style={{
        height: 50,
        margin: 20,
        borderBottomWidth: 1,
        borderBottomColor: activeColor.secondry,
        color: activeColor.secondry,
      }}
      value={value}
      placeholderTextColor={activeColor.secondry}
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
    borderBottomColor: 'grey',
    color: 'white',
  },
};

export default Input;
