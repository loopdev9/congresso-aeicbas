import React from 'react';
import { Platform, Text, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ArticlesScreen from '../screens/ArticlesScreen';
import Article from '../screens/Article';
import TimetableScreen from '../screens/TimetableScreen';
import SponsorsScreen from '../screens/SponsorsScreen';
import EventScreen from '../screens/EventScreen';
import PentagonSessionScreen from '../screens/PentagonSessionScreen';
import SessionScreen from '../screens/SessionScreen';
import MapScreen from '../screens/MapScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import MainScreen from '../screens/MainScreen';
import AllEventsScreen from '../screens/AllEventsScreen';
import AddEvent from '../screens/AddEvent';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignupScreen from '../screens/AuthScreens/SignupScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MainStack = createStackNavigator(
  {
    Home: MainScreen,
    Sponsors: SponsorsScreen,
    Articles: ArticlesScreen,
    Article: Article,
    Timetable: TimetableScreen,
    Event: EventScreen,
    PentagonSession: PentagonSessionScreen,
    Session: SessionScreen,
    Map: MapScreen,
    Favourites: FavouritesScreen,
    AllEvents: AllEventsScreen,
    NewEvent: AddEvent,
    Login: LoginScreen,
    Signup: SignupScreen
  },
  config
);

MainStack.navigationOptions = {
  headerTitle: <Text>Header</Text>,
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  ),
};

export default MainStack;
