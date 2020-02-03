import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import api from "../Api.js";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles.js';
import { auth } from 'firebase';

export default function QuestionPreview(props) {
  return (
    <View style={styles.questionBoxDescription}>
        <Text style = {{fontSize: 20}}>
          {props.body}
        </Text>
        <Text >
          {props.user}
        </Text>
    </View>
  );
}

