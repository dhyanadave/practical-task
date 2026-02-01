import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import BackIcon from '../../assets/icons/BackIcon';
import {sizeHeight, sizeWidth, sizeFont} from '../../utils/Utils';
import colors from '../../utils/colors.json';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <AppText variant="title" style={styles.title}>
        Forgot Password
      </AppText>
      <View style={styles.subContainer}>
        <AppInput
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Email Address"
        />
      </View>
      <AppButton title="Continue" onPress={() => navigation.navigate('PasswordResetConfirmation')} />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizeWidth(24),
    paddingTop: '10%',
    backgroundColor: colors.white,
  },
  subContainer: {
    marginTop: sizeHeight(28),
    marginBottom: sizeHeight(10),
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
