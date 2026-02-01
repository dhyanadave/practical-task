import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import colors from '../utils/colors.json';
import {sizeFont, sizeHeight, sizeWidth} from '../utils/Utils';

const AppInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder_gray}
        secureTextEntry={secureTextEntry}
        style={[styles.input, style]}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: sizeHeight(16),
  },
  input: {
    height: sizeHeight(56),
    backgroundColor: colors.primary_light,
    borderRadius: sizeWidth(4),
    paddingHorizontal: sizeWidth(16),
    fontSize: sizeFont(14),
    color: colors.black,
  },
});
