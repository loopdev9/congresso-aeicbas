import React from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';


import styles from '../styles.js';

export default function HomeBtn(props) {

  var icon;

  if (props.icon === "profile")
    icon = require("../../assets/images/icons/profile.png");

  else if (props.icon === "schedule")
    icon = require("../../assets/images/icons/schedule.png");

  else if (props.icon === "sponsors")
    icon = require("../../assets/images/icons/sponsors.png");

  else if (props.icon === "news")
    icon = require("../../assets/images/icons/news.png");

  return (
      <View
        style={styles.inlineContainer}
      >
        <View
          style={styles.smallBlueButton}
        >
          <Image style={styles.icon} source={icon} />
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate(props.link, props.args)}
          style={styles.mainBlueButton}
        ><Text style={styles.buttonText}>{props.title}</Text></TouchableOpacity>
      </View>
  );
}
