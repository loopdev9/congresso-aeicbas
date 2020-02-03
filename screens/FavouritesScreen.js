import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import api from "../Api.js";
import EventPreview from './EventPreview';
import EventScreen from './EventScreen';
import * as firebase from 'firebase';
import styles from './styles.js';
import Navbar from "./Partials/Navbar.js";
import Graph from "./Partials/Graph.js";


import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { addOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';

const { auth, db } = require('../config.js');
export default function FavouritesScreen(props) {

  const email = auth.currentUser.email
  const [lectures, setLectures] = useState([]);
  const uRef = db.collection('User');
  let userID = firebase.auth().currentUser.uid;
  let userDocRef = uRef.doc(userID);
  const lecRef = db.collection('Lecture');

  useEffect(() => {
    return uRef.onSnapshot(querySnapshot => {
      let allFavourites = [];

      for (let i in querySnapshot.docs) {
        let doc = querySnapshot.docs[i];
        // console.log("doc id: "+ doc.id);
        // console.log("user id "+ userID);
        if (doc.id == userID) {
          const { email, favourites } = doc.data();
          allFavourites = favourites;
          // console.log("FAVORITOS: " + favourites);
          break;
        }
      }

      makeList(allFavourites);

    });
  }, []);

  function makeList(allFavourites) {
    const list = [];

    lecRef.onSnapshot(querySnapshot => {

      querySnapshot.forEach(doc => {
        if (allFavourites.includes(doc.id)) {
          const { begin, day, description, end, room, title, type, speaker, speakerDescription, pentagonSession, session } = doc.data();
          list.push({
            id: doc.id,
            begin,
            day,
            description,
            end,
            room,
            title,
            type,
            speaker,
            speakerDescription
          });
        }
      })
      setLectures(list);
    })
  }
  console.log(lectures);

  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Navbar />
      <Text style={styles.favouritesTitle}>My Profile</Text>
      <Text style = {{justifyContent: "center"},styles.eventBoxDescription}>Favourite events</Text>
      <FlatList
        style={{ flex: 1, marginTop: 4, paddingTop: 10 }}
        data={lectures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Event', { event: item })}>
            <EventPreview {...item} />
          </TouchableOpacity>}
      />
      <Graph />
    </View>
  );
}
