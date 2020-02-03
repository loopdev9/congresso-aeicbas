import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import api from "../Api.js";
import {
  Image,
  Platform,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Navbar from "./Partials/Navbar.js";

import styles from './styles.js';

let sponsors = [
  require('../assets/images/junifeup.png'),
  require('../assets/images/junifeup.png'),
  require('../assets/images/junifeup.png'),
  require('../assets/images/junifeup.png'),
];

export default function SponsorsScreen(props) {

  return (
    <View style={styles.fullContainer}>
      <Navbar />
      <ScrollView
        style={{width: "100%"}}
      >

        <Text style={styles.title}>PATROCINADORES</Text>

        <FlatList  data={sponsors}
          numColumns={2}
          renderItem={({item}) => 
            <Image 
              source={item} 
              style={styles.sponsorImg}
            />
          }
          style={{marginHorizontal: 10, alignSelf: 'center' }}
          keyExtractor={(item, index) => index.toString()}
        />
  {/* 
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Event')}
        ><Text>Event</Text></TouchableOpacity> */}

      </ScrollView>

    </View>
  );
}

SponsorsScreen.navigationOptions = {
  header: null,
};

