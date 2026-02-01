import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { sizeFont, sizeHeight, sizeWidth } from '../utils/Utils';
import colors from '../utils/colors.json';

const CategoryItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={item.image} style={styles.image} />
      </View>
      <AppText style={styles.title}>{item.title}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: sizeWidth(16),
  },
  imageBox: {
    backgroundColor: colors.gray,
    borderRadius: sizeWidth(40),
    padding: sizeWidth(12),
    
  },
  image: {
    width: sizeWidth(40),
    height: sizeHeight(40),
    resizeMode: 'contain',
  },
  title: {
    marginTop: sizeHeight(6),
    fontSize: sizeFont(12),
  },
});