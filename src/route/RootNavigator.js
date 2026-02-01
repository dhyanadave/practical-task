import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/HomeIcon';
import NotificationIcon from '../assets/icons/NotificationIcon';
import RecieptIcon from '../assets/icons/RecieptIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import HomeIconFilled from '../assets/icons/HomeIconFilled';
import NotificationIconFilled from '../assets/icons/NotificationIconFilled';
import RecieptIconFilled from '../assets/icons/RecieptIconFilled';
import ProfileIconFilled from '../assets/icons/ProfileFilledIcon';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/auth/SignInScreen';
import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import PasswordResetConfirmation from '../screens/auth/PasswordResetConfirmation';
import BasicInfoScreen from '../screens/onboarding/BasicInfoScreen';
import {sizeHeight} from '../utils/Utils';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: sizeHeight(70),
          paddingBottom: sizeHeight(10),
          paddingTop: sizeHeight(10),
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return !focused ? <HomeIcon /> : <HomeIconFilled />;
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return !focused ? <NotificationIcon /> : <NotificationIconFilled />;
          },
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return !focused ? <RecieptIcon /> : <RecieptIconFilled />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return !focused ? <ProfileIcon /> : <ProfileIconFilled />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTab" component={AppRoute} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen
          name="PasswordResetConfirmation"
          component={PasswordResetConfirmation}
        />
        <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
