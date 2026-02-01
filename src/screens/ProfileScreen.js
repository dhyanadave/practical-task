import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const TOKEN_KEY = 'AUTH_TOKEN';

  function userLogout() {
    return new Promise((resolve, reject) => {
      auth()
        .signOut()
        .then(() => {
          resolve('Logout Successful');
          AsyncStorage.removeItem(TOKEN_KEY);
          navigation.replace('SignIn');
          GoogleSignin.signOut();
        })
        .catch(error => {
          reject({
            title: 'Error',
            desc: error.message,
          });
        });
    });
  }
  return (
    <View>
      <AppText>ProfileScreen</AppText>
      <AppButton title="Log out" onPress={() => userLogout()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
