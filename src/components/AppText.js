import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../utils/colors.json';
import { sizeFont } from '../utils/Utils';

const AppText = ({
  children,
  style,
  variant = 'body',
  color = colors.black,
}) => {
  return (
    <Text style={[styles[variant], { color }, style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  title: {
    fontSize: sizeFont(32),
    fontWeight: '600',
  },
  body: {
    fontSize: sizeFont(14),
    fontWeight: '400',
  },
  caption: {
    fontSize: sizeFont(12),
    fontWeight: '400',
  },
  link: {
    fontSize: sizeFont(12),
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: sizeFont(14),
    fontWeight: '500',
  },
});
