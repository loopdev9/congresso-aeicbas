import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import api from "../Api.js";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

import { Form, Button } from 'native-base'

const { db } = require('../config.js');

export default function AddEvent(props) {
    const [beginGiven, setBegin] = useState();
    const [endGiven, setEnd] = useState();
    const [dayGiven, setDay] = useState();
    const [descriptionGiven, setDescription] = useState();
    const [roomGiven, setRoom] = useState();
    const [titleGiven, setTitle] = useState();
    const lectureRef = db.collection('Lecture');

    function noNull(info) {
        for (var k in info) {
            console.log(info[k]);
            if (info[k] == null)
                return false;
        }
        return true;
    }
    async function addEvent() {
        if (noNull([beginGiven, endGiven, dayGiven, descriptionGiven, roomGiven, titleGiven ])) {
            lectureRef.add({ begin: beginGiven, end: endGiven, day: dayGiven, description: descriptionGiven, room: roomGiven, title: titleGiven });
            setTitle('');
            setBegin('');
            setEnd('');
            setDay('');
            setDescription('');
            setRoom('');
        }
        else {
            console.log("Some values are null");
        }
    }


    return (
        <>
            <View style={styles.container}>
                <Form style={styles.form}>
                    <TextInput style = {styles.form} placeholder="Title" onChangeText={title => setTitle(title)} >
                    </TextInput>
                    <TextInput style = {styles.form} placeholder="Description" onChangeText={description => setDescription(description)} >
                    </TextInput>
                    <TextInput style = {styles.form} placeholder="Room" onChangeText={room => setRoom(room)} >
                    </TextInput>
                    <TextInput style = {styles.form} placeholder="Day" onChangeText={day => setDay(day)} >
                    </TextInput>
                    <TextInput style = {styles.form} placeholder="Begin" onChangeText={begin => setBegin(begin)} >
                    </TextInput>
                    <TextInput style = {styles.form} placeholder="End" onChangeText={end => setEnd(end)} >
                    </TextInput>

                    <Button full rounded success onPress={() => addEvent()}><Text>Add Event</Text></Button>
                </Form>
            </View>

        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    form: {
        padding: 20
    }
});
