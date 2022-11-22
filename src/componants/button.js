import React from 'react';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({title, color, onpress, disabled}) => (
  <TouchableOpacity
    onPress={onpress}
    style={{
      height: 40,
      width: 120,
      opacity: 1,
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: 'darkturquoise',
      borderRadius: 12,
      justifyContent: 'center',
    }}>
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = {
  container: {
    height: 40,
    width: 120,
    opacity: 1,
    alignSelf: 'center',
    backgroundColor: CustomButton.color,
    borderRadius: 15,
  },
  text: {
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 19,
  },
};

export default CustomButton;
