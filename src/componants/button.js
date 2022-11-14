import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const CustomButton = ({title, color, onpress, disabled}) => {
  const {button, container} = styles;
  return (
    <View style={container}>
      <Button
        style={button}
        title={title}
        onPress={onpress}
        color={color}
        disabled={false}
      />
    </View>
  );
};

const styles = {
  container: {
    padding: 30,
    justifyContent: 'center',
    borderRadius: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default CustomButton;
