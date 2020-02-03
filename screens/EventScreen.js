import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState, Component } from 'react';
import { Alert } from 'react-native';
import api from "../Api.js";
import * as firebase from 'firebase';
import QuestionPreview from './QuestionScreen';
import Navbar from "./Partials/Navbar.js";
import styles from './styles.js';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    SafeAreaView
} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import { Form, Button } from 'native-base';

import { auth } from "../config.js";
const { db } = require('../config.js');
const user = db.collection('User');
const questionRef = db.collection('Question');
const lectureRef = db.collection('Lecture');


function addToFavourites(info) {
    var docRef = user.doc(firebase.auth().currentUser.uid).get().then(doc => {
        if (!doc.data().favourites.includes(info.id)) {
            var currentInfo = [];
            if (doc.data().favourites != undefined) {
                currentInfo = doc.data().favourites;
            }
            doc.ref.update({ 'favourites': currentInfo });
        }
    });
}

export default function EventScreen(props) {
    const info = props.navigation.state.params.event;
    //const userEmail = props.navigation.state.params.email;
    const [questionBody, setQuestionBody] = useState('');
    const [questions, setQuestionsList] = useState([]);
    const currentLecture = lectureRef.doc(String(info.id));

    let addToFavIcon = require("../assets/images/icons/sponsors.png");

    function noNull(info) {
        for (var k in info) {
            if (info[k] == null)
                return false;
        }
        return true;
    }

    async function addQuestion() {
        let uid = auth.currentUser.uid;
        if (!(/^\s*$/.test(questionBody))) {
            let newQ = { user: uid, lecture: currentLecture, body: questionBody, date: new Date() };
            questionRef.add(newQ);
            setQuestionsList([]);
        }
        else {

        }
    }

    useEffect(() => {
        let list = [];
        questionRef.where('lecture', '==', currentLecture).onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const { user, lecture, body, date } = doc.data();
                console.log("questions ");
                console.log(questions);
                setQuestionsList(oldList => oldList.concat({
                    id: doc.id,
                    user,
                    lecture,
                    body,
                    date
                }))
                //list.push();
            });

        }
        );
        //let questionInDb = questionRef.where('lecture','==',currentLecture.id);
        //setQuestionsList(list);
        console.log(list);
        //props.navigation.navigate('Event', { props })
    }, []);

    function Question(item) {
        if (auth.currentUser != null) {
            if (auth.currentUser.uid == item.user) {//TODO: Trocar texto por botao 
                return (<View>
                    <TouchableOpacity onPress={({ item }) => { questionRef.doc(item.id).delete() }}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                    <QuestionPreview {...item} />

                </View>)

            } else {
                return (<QuestionPreview {...item} />);
            }
        } else {
            return (<QuestionPreview {...item} />)
        }

    }

    return (
        <ScrollView>
            <View
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <Navbar />
                <Text style={styles.title}>{info.title}</Text>
                <View>
                    <View>
                        <Text>SPEAKER NAME HERE (maybe?)</Text>
                        <Text style={styles.eventBoxDescription}>{info.description}</Text>
                    </View>

                    <TouchableOpacity onPress={() => {
                        if (auth.currentUser) {
                            addToFavourites(info)
                        }
                        else {
                            Alert.alert('You need an account to have favourite events.');
                        }
                    }}>
                        <Text>Add to favourites</Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.separator}>Ask a question!</Text>
                <TextInput style={styles.questionInput} multiline={true} placeholder="Write your question here!" onChangeText={body => setQuestionBody(body)} >
                </TextInput>
                <TouchableOpacity style={styles.mainBlueButton} onPress={() => {
                    addQuestion();
                }
                }>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
                <FlatList
                    style={{ flex: 1, marginTop: 4, paddingTop: 10 }}
                    data={questions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        //<QuestionPreview {...item} />
                        <Question {...item} />
                    }
                />
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
            ><Text>GoBack</Text></TouchableOpacity>
        </ScrollView>);

}

EventScreen.navigationOptions = {
    header: null,
};

