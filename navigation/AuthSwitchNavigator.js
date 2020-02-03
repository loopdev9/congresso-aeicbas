import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SignupScreen from '../screens/AuthScreens/SignupScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import ResetPasswordScreen from '../screens/AuthScreens/ResetPasswordScreen';



const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const AuthSwitch = createSwitchNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Pass: ResetPasswordScreen,
  },
  config
);

AuthSwitch.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default AuthSwitch;