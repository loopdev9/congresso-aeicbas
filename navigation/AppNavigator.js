import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthSwitchNavigator from './AuthSwitchNavigator.js';
import MainStackNavigator from './MainStackNavigator.js';

import { auth } from "../config.js";

let appContainer;

if (auth.currentUser) {
  appContainer = createAppContainer(
    createSwitchNavigator({
      Home: MainStackNavigator,
      Auth: AuthSwitchNavigator
    })
  )
}
else {
  appContainer = createAppContainer(
    createSwitchNavigator({
      Auth: AuthSwitchNavigator,
      Home: MainStackNavigator
    })
  )
}


export default appContainer;
