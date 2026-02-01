import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors.json';
import { sizeHeight, sizeWidth, sizeFont } from '../utils/Utils';

const AppButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    height: sizeHeight(52),
    backgroundColor: colors.primary,
    borderRadius: sizeWidth(26),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizeHeight(16),
  },
  text: {
    color: colors.white,
    fontSize: sizeFont(14),
    fontWeight: '500',
  },
});
