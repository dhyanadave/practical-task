import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../utils/colors.json';
import AppLogo from '../assets/images/AppLogo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      const token = await AsyncStorage.getItem('AUTH_TOKEN');
      if (token) {
        navigation.replace('BottomTab');
      } else {
        navigation.replace('SignIn');
      }
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <AppLogo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
