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
import {
    createMaterialTopTabNavigator,
    createAppContainer
} from "react-navigation";

const lectureRef = db.collection('Lecture');
let loaded;

export default function SessionScreen(props) {
    const info = props.navigation.state.params.event;
    const currentSession = lectureRef.doc(String(info.id));
    const [selected, setSelected] = useState(1);
    const [beEvents, setBioEng] = useState([]);
    const [bqEvents, setBioQuim] = useState([]);
    const [cmaEvents, setCMA] = useState([]);
    const [medEvents, setMedicina] = useState([]);
    const [medVetEvents, setVet] = useState([]);
    if (loaded == undefined) {
        loaded = false;
    }
    let chosenDay = 0;
    // const [timetable, setTimetable] = useState([]);


    useEffect(() => {

        return lectureRef.where('session', '==', currentSession).onSnapshot(querySnapshot => {
            const list1 = [];
            const list2 = [];
            const list3 = [];
            const list4 = [];
            const list5 = [];

            querySnapshot.forEach(doc => {
                const { begin, day, description, end, room, title, type, speaker, speakerDescription, major, pentagonSession } = doc.data();
                console.log(major);
                if (pentagonSession == undefined) {
                    switch (major) {
                        case "bioeng":
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
                        case "bioqui":
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
                        case "cmaqua":
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
                        case "medicn":
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
                        case "medvet":
                            list5.push({
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

            setBioEng(list1);
            setBioQuim(list2);
            setCMA(list3);
            setMedicina(list4);
            setVet(list5);
            loaded = true;
            console.log("loaded = true")
            props.navigation.navigate('Session', { props })
        });
    }, []);

    function displaySchedule(selected) {

        let showArray = [];
        let major = "";
        switch (selected) {
            case 1:
                showArray = beEvents;
                major = "Bioengenharia";
                break;
            case 2:
                showArray = bqEvents;
                major = "Bioquímica";
                break;
            case 3:
                showArray = cmaEvents;
                major = "Ciências do Meio Aquático";
                break;
            case 4:
                showArray = medEvents;
                major = "Medicina";
                break;
            case 5:
                showArray = medVetEvents;
                major = "Medicina Veterinária";
                break;
        }
        if (!loaded) {
            return (<View><Text>No lectures/events loaded</Text></View>);
        }
        else if (loaded) {
            return (
                <View style={{ marginTop: 30, alignSelf: "stretch" }}>
                    <Text style={styles.title}>{major}</Text>
                    {//TODO: TEM INFO NAO DESENHA
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
                        })
                    }
                </View>

            )
        }

    }
    return (
        <View style={styles.fullContainer}>
            <Navbar />
            <Text style={styles.title}>{info.title}</Text>
            <View style={[styles.inlineContainer, styles.spaceAround, styles.dayBoxesView]}>
                <DayBox date="BIOENGENHARIA" index={1} selected={selected == 1} setSelected={setSelected} />
                <DayBox date="BIOQUÍMICA" index={2} selected={selected == 2} setSelected={setSelected} />
                <DayBox date="CIÊNCIAS DO MEIO AQUÁTICO" index={3} selected={selected == 3} setSelected={setSelected} />
                <DayBox date="MEDICINA" index={4} selected={selected == 4} setSelected={setSelected} />
                <DayBox date="MEDICINA VETERINARIA" index={5} selected={selected == 5} setSelected={setSelected} />
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

SessionScreen.navigationOptions = {
    header: null,
};

