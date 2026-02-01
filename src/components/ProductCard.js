import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import FavouriteIcon from '../assets/icons/FavouriteIcon';
import {sizeFont, sizeHeight, sizeWidth} from '../utils/Utils';
import colors from '../utils/colors.json';

const ProductCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <TouchableOpacity style={styles.heart}>
        <FavouriteIcon />
      </TouchableOpacity>
      <Image source={item.image} style={styles.image} />
      <View style={{padding: 10}}>
        <AppText style={styles.name}>{item.name}</AppText>
        <View style={styles.priceRow}>
          <AppText style={styles.price}>{item.price}</AppText>
          {item.oldPrice && (
            <AppText style={styles.oldPrice}>{item.oldPrice}</AppText>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: sizeWidth(159),
    height: sizeHeight(290),
    backgroundColor: colors.light_gray,
    borderRadius: sizeWidth(16),
    marginRight: sizeWidth(16),
  },
  heart: {
    position: 'absolute',
    top: sizeHeight(10),
    right: sizeWidth(10),
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: sizeHeight(220),
    resizeMode: 'stretch',
  },
  name: {
    fontSize: sizeFont(12),
    marginTop: sizeHeight(8),
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizeHeight(4),
  },
  price: {
    fontWeight: 'bold',
    fontSize: sizeFont(12),
  },
  oldPrice: {
    marginLeft: 6,
    color: colors.line_gray,
    textDecorationLine: 'line-through',
    fontSize: sizeFont(12),
  },
});
