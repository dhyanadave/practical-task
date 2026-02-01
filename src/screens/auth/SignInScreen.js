import React, {useCallback, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import colors from '../../utils/colors.json';
import {sizeHeight, sizeWidth} from '../../utils/Utils';
import AppleIcon from '../../assets/icons/AppleIcon';
import GoogleIcon from '../../assets/icons/GoogleIcon';
import FacebookIcon from '../../assets/icons/FacebookIcon';
import {useFocusEffect} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import String from '../../utils/Strings';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = React.useState();

  const TOKEN_KEY = 'AUTH_TOKEN';

  const saveToken = async token => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  };

  function onAuthStatusChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStatusChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '218737471784-sj6r0tq9622fvtbsbohtt41oo9jgumn0.apps.googleusercontent.com',
    });
  }, []);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const result = await GoogleSignin.signIn();

      if (result.type !== 'success') {
        return;
      }

      const {idToken} = result.data;

      if (!idToken) {
        throw new Error('No ID token returned');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);

      await saveToken(idToken);

      navigation.replace('BottomTab');
    } catch (error) {
      console.log('GOOGLE SIGN-IN ERROR', error);
    }
  };

  const validationCheck = () => {
    if (password == '') {
      Alert.alert('Error', 'Please enter password');
    }

    if (email && password) {
      validateUser();
    }
  };

  const validateUser = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async userCredential => {
        const user = userCredential.user;

        await saveToken(user.uid);
        navigation.replace('BottomTab');
      })
      .catch(error => {
        Alert.alert('Error', 'Please check your Email ID and Password');
      });
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (showPassword) {
          setShowPassword(false);
          setPassword('');
          return true;
        }
        return false;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [showPassword]),
  );

  const onContinue = () => {
    if (email == '') {
      Alert.alert('Error', 'Please enter email address');
    } else setShowPassword(true);
  };

  return (
    <View style={styles.container}>
      <AppText variant="title">{String.signIn}</AppText>

      {!showPassword ? (
        <>
          <View style={styles.subContainer}>
            <AppInput
              onChangeText={setEmail}
              value={email}
              placeholder={String.emailAddress}
            />
            <AppButton title={String.continue} onPress={() => onContinue()} />
          </View>
          <View style={styles.row}>
            <AppText variant="caption">{String.noAccount + " "}</AppText>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <AppText variant="link">{String.createOne}</AppText>
            </TouchableOpacity>
          </View>

          <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.socialBtn}>
              <AppleIcon />
              <AppText variant="buttonText">{String.apple}</AppText>
              <View></View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialBtn}
              onPress={() => googleSignIn()}>
              <GoogleIcon />
              <AppText variant="buttonText">{String.google}</AppText>
              <View></View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <FacebookIcon />
              <AppText variant="buttonText">{String.facebook}</AppText>
              <View></View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.subContainer}>
            <AppInput
              placeholder={String.Password}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
            <AppButton title={String.continue} onPress={() => validationCheck()} />
          </View>
          <View style={styles.row}>
            <AppText variant="caption">Forgot password? </AppText>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <AppText variant="link">{String.resetPassword}</AppText>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizeWidth(24),
    paddingTop: '15%',
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
  },
  subContainer: {
    marginTop: sizeHeight(32),
  },
  loginContainer: {
    marginTop: '18%',
  },
  socialBtn: {
    paddingHorizontal: sizeWidth(16),
    height: sizeHeight(52),
    backgroundColor: colors.gray,
    borderRadius: sizeWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sizeHeight(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
