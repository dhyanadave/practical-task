import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {sizeWidth, sizeHeight, sizeFont} from '../../utils/Utils';
import colors from '../../utils/colors.json';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import BackIcon from '../../assets/icons/BackIcon';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const TOKEN_KEY = 'AUTH_TOKEN';

  const saveToken = async token => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  };
  
  const validationCheck = () => {
    if (firstName == '') {
      Alert.alert('Error', 'Please enter first name');
    } else if (lastName == '') {
      Alert.alert('Error', 'Please enter last name');
    } else if (email == '') {
      Alert.alert('Error', 'Please enter email');
    } else if (password == '') {
      Alert.alert('Error', 'Please enter password');
    }

    if (firstName && lastName && email && password) {
      createUser();
    }
  };

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async userCredential => {
        const idToken = await userCredential.user.getIdToken();
        await saveToken(idToken);
        navigation.replace('BottomTab');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else if (error.code === 'auth/weak-password') {
          Alert.alert('Error', 'Password should be at least 6 characters');
        } else
          Alert.alert(
            'Error',
            'Something went wrong. Please try again with correct details.',
          );
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <AppText variant="title" style={styles.title}>
        Sign Up
      </AppText>
      <View style={styles.subContainer}>
        <AppInput
          onChangeText={setFirstName}
          value={firstName}
          placeholder="Firstname"
        />
        <AppInput
          onChangeText={setLastName}
          value={lastName}
          placeholder="Lastname"
        />
        <AppInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email Address"
        />
        <AppInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <AppButton title="Continue" onPress={() => validationCheck()} />

      <View style={styles.row}>
        <AppText variant="caption">Forgot password? </AppText>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <AppText variant="link">Reset</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizeWidth(24),
    paddingTop: '10%',
    backgroundColor: colors.white,
  },
  subContainer: {
    marginVertical: sizeHeight(28),
    gap: sizeHeight(10),
  },
  row: {
    flexDirection: 'row',
    marginTop: sizeHeight(28),
  },
  title: {
    marginTop: sizeHeight(20),
  },
});
