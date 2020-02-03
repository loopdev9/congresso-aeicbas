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

const lectureRef = db.collection('Lecture');
let loaded;

export default function PentagonSessionScreen(props) {

    const info = props.navigation.state.params.event;
    const currentPentagonSession = lectureRef.doc(String(info.id));
    const [SessionEvents, setEvents] = useState([]);
    if (loaded == undefined) {
        loaded = false;
    }

    useEffect(() => {
        const list = [];
        lectureRef.where('pentagonSession', '==', info.title).onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const { begin, day, description, end,room, title, type, speaker, speakerDescription} = doc.data();
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
                    speakerDescription});
            });
        }
        );
        //let questionInDb = questionRef.where('lecture','==',currentLecture.id);
        //console.log(questionInDb);
        setEvents(list);
        props.navigation.navigate('PentagonSession', { props })
    }, []);

    function displaySchedule() {
        console.log("OJOKOK");

        return (
            <View style={{ marginTop: 30, alignSelf: "stretch" }}>
                {
                    SessionEvents.map((event, index) => {
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
                    })
                }
            </View>

        )
    }

    if (SessionEvents.length != [])
        return (
            <View style={styles.fullContainer}>
                <Navbar />
                <Text style={styles.title}>{info.title}</Text>
                <ScrollView
                    style={{ width: "100%", flexDirection: "column" }}
                >
                    {
                        displaySchedule()
                    }
                    {/* 
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Event')}
        ><Text>Event</Text></TouchableOpacity> */}

                </ScrollView>

            </View>
        );
    else
        return (<View></View>);
}

PentagonSessionScreen.navigationOptions = {
    header: null,
};

