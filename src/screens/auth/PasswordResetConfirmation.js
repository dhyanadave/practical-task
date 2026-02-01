import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SentEmailImage from '../../assets/images/SentEmailImage';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import {sizeFont, sizeHeight, sizeWidth} from '../../utils/Utils';

const PasswordResetConfirmation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SentEmailImage />
      <AppText style={styles.text}>
        We Sent you an Email to reset your password.
      </AppText>
      <AppButton
        title={'Return to Login'}
        onPress={() => navigation.navigate('SignIn')}
        style={styles.btn}
      />
    </View>
  );
};

export default PasswordResetConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizeWidth(10),
    gap: sizeHeight(20),
  },
  text: {fontSize: sizeFont(24), fontWeight: '500', textAlign: 'center'},
  btn: {paddingHorizontal: sizeWidth(20)},
});
