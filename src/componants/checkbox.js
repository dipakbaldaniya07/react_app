import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CheckBox = ({
  selected,
  onPress,
  style,
  textStyle,
  size = 25,
  color = '#211f30',
  text = '',
  ...props
}) => (
  <TouchableOpacity
    style={[styles.checkBox, style]}
    onPress={onPress}
    {...props}>
    <Icon size={size} color={color} name="tint" />
    <Text style={styles.textStyle}>{text}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  checkBox: {
    padding: 0,
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    height: 100,
    width: 200,
    color: 'skyblue',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default CheckBox;
