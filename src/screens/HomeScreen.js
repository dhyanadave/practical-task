import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

import {categories, products} from '../constants/data';
import CategoryItem from '../components/CategoryItem';
import ProductCard from '../components/ProductCard';
import AppText from '../components/AppText';
import {sizeHeight, sizeWidth, sizeFont} from '../utils/Utils';
import SearchIcon from '../assets/icons/SearchIcon';
import colors from '../utils/colors.json';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=2048x2048&w=is&k=20&c=jH-i5rEcMlrpgSk1-485MLwC8mnzth8PJYYkfgFz2KQ=',
          }}
          style={styles.avatar}
        />

        <View style={styles.genderContainer}>
          <AppText style={styles.genderText}>Men ▼</AppText>
        </View>

        <View style={styles.cartContainer}>
          <AppText style={styles.cartIcon}>👜</AppText>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.sectionHeader}>
        <AppText style={styles.sectionTitle}>Categories</AppText>
        <AppText style={styles.seeAll}>See All</AppText>
      </View>

      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CategoryItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View style={[styles.sectionHeader, {marginTop: sizeHeight(24)}]}>
        <AppText style={styles.sectionTitle}>Top Selling</AppText>
        <AppText style={styles.seeAll}>See All</AppText>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View style={[styles.sectionHeader, {marginTop: sizeHeight(24)}]}>
        <AppText style={styles.sectionTitle}>New In</AppText>
        <AppText style={styles.seeAll}>See All</AppText>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listSpacing}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: sizeHeight(20),
    paddingBottom: sizeHeight(10),
    paddingHorizontal: sizeWidth(15),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: sizeWidth(40),
    height: sizeHeight(40),
    borderRadius: sizeWidth(21),
  },
  genderContainer: {
    backgroundColor: colors.light_gray,
    paddingHorizontal: sizeWidth(18),
    paddingVertical: sizeHeight(8),
    borderRadius: sizeWidth(20),
  },
  genderText: {
    fontSize: sizeFont(14),
    fontWeight: '500',
  },
  cartContainer: {
    backgroundColor: colors.light_gray,
    padding: sizeHeight(10),
    borderRadius: sizeWidth(22),
  },
  listSpacing: {
    marginBottom: sizeHeight(30),
  },
  cartIcon: {
    fontSize: sizeFont(16),
  },
  searchContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: sizeWidth(100),
    paddingHorizontal: sizeWidth(20),
    paddingVertical: sizeHeight(10),
    marginVertical: sizeHeight(16),
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: sizeWidth(8),
  },
  searchInput: {
    fontSize: sizeFont(12),
    height: sizeHeight(35),
    color: colors.black,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizeHeight(12),
    marginTop: sizeHeight(10),
  },
  sectionTitle: {
    fontSize: sizeFont(16),
    fontWeight: '700',
  },
  seeAll: {
    fontSize: sizeFont(16),
    color: colors.black,
  },
});
