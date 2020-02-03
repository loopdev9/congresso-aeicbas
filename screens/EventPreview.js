import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import api from "../Api.js";
import styles from './styles.js';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function EventPreview(props) {
  console.log(props);
  return (
    <View style={styles.favouritesBox}>
        <Text style = {styles.favouritesText}>
          {props.title}
        </Text>
    </View>
  );
}

