import React, { useState, useEffect } from 'react';

import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Navbar from "./Partials/Navbar.js";
import DayBox from "./TimetablePartials/DayBox.js";
import BreakBox from './TimetablePartials/BreakBox.js';
import EventBox from './TimetablePartials/EventBox.js';

import styles from './styles.js';

import { db } from "../config.js";

const ref = db.collection('Lecture');
let loaded;

export default function TimetableScreen(props) {

  const [selected, setSelected] = useState(1);
  const [todaysEvents1, setEvents1] = useState([]);
  const [todaysEvents2, setEvents2] = useState([]);
  const [todaysEvents3, setEvents3] = useState([]);
  const [todaysEvents4, setEvents4] = useState([]);
  let showArray = [];

  if (loaded == undefined) {
    loaded = false;
  }
  let chosenDay = 0;
  // const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    return ref.orderBy('begin').onSnapshot(querySnapshot => {
      const list1 = [];
      const list2 = [];
      const list3 = [];
      const list4 = [];

      querySnapshot.forEach(doc => {
        const { begin, day, description, end, room, title, type, speaker, speakerDescription, pentagonSession, session } = doc.data();
        if(pentagonSession == undefined && session == undefined){
          switch (day) {
            case 1:
              list1.push({
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
              break;
            case 2:
              list2.push({
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
              break;
            case 3:
              list3.push({
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
              break;
            case 4:
              list4.push({
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
              break;
          }
        }
      });

      setEvents1(list1);
      setEvents2(list2);
      setEvents3(list3);
      setEvents4(list4);
      loaded = true;
      console.log("loaded = true")
      console.log(todaysEvents2);
      props.navigation.navigate('Timetable', { props })
    });
  }, []);

  function displaySchedule(selected) {

    switch (selected) {
      case 1:
        showArray = todaysEvents1;
        console.log("todaysEvents1");
        break;
      case 2:
        showArray = todaysEvents2;
        console.log(todaysEvents2);
        break;
      case 3:
        showArray = todaysEvents3;
        console.log("todaysEvents3");
        break;
      case 4:
        showArray = todaysEvents4;
        console.log("todaysEvents4");
        break;
    }
    if (!loaded) {
      return (<View><Text>No lectures/events loaded</Text></View>);
    }
    else if (loaded) {
      console.log(showArray);
      return (
        <View style={{ marginTop: 30, alignSelf: "stretch" }}>
          {
            showArray.map((event, index) => {
              if (event["type"] == "break") {
                return (<BreakBox key={index} event={event} />);
              }
              else if (event["type"] == "event") {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => { props.navigation.navigate('Event', { event }) }}>
                    <EventBox event={event} />
                  </TouchableOpacity>
                );
              }
              else if (event["type"] == "pentagon") {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => { props.navigation.navigate('PentagonSession', { event }) }}>
                    <EventBox event={event} />
                  </TouchableOpacity>
                );
              }
              else if (event["type"] == "session") {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => { props.navigation.navigate('Session', { event }) }}>
                    <EventBox event={event} />
                  </TouchableOpacity>
                );
              }
            })
          }
        </View>

      )
    }

  }

  return (
    <View style={styles.fullContainer}>
      <Navbar />
      <Text style={styles.title}>PROGRAMA</Text>
      <View style={[styles.inlineContainer, styles.spaceAround, styles.dayBoxesView]}>
        <DayBox date="12 de março" index={1} selected={selected == 1} setSelected={setSelected} />
        <DayBox date="13 de março" index={2} selected={selected == 2} setSelected={setSelected} />
        <DayBox date="14 de março" index={3} selected={selected == 3} setSelected={setSelected} />
        <DayBox date="15 de março" index={4} selected={selected == 4} setSelected={setSelected} />
      </View>

      <ScrollView
        style={{ width: "100%", flexDirection: "column" }}
      >
        {
          displaySchedule(selected)
        }
        {/* 
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Event')}
        ><Text>Event</Text></TouchableOpacity> */}

      </ScrollView>

    </View>
  );

}

TimetableScreen.navigationOptions = {
  header: null,
};

