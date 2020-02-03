import React from 'react';
import Graph from "../Partials/Graph.js"

import firebase from 'firebase';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import styles from '../styles.js';

import {getfirebaseDdata} from './../../notification/notification'

import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image
} from 'react-native';
const { db, auth } = require('../../config.js');
const usersRef = db.collection('User');
export default function LoginScreen(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  if (auth.currentUser) {
    props.navigation.navigate("Home");
  }
   

  function NavbarAuth(props) {

    return (
      <View style={[styles.navbarAuth, styles.mainBgColor]}>  
        <Image source={require(`../../assets/images/logo_white.png`)} />
        <TouchableOpacity
            onPress={props.task}
            ><Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }

  handleLogin = async ()=> {
    await getfirebaseDdata();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => 
        auth.onAuthStateChanged(async (user)=> {
          if (user && user.emailVerified) {
            let currentUserRef = usersRef.doc(auth.currentUser.uid);
            if (currentUserRef == undefined) {
              currentUserRef.set({ email: email, favourites: [] });
            }
          
            props.navigation.navigate('Home');
          }
           else if (user) {
            alert('Please, verify your email');
          }
        })
      )
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }



  return (
    <View style={styles.fullContainer}>
      <NavbarAuth task={() => props.navigation.navigate('Signup')} />
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <Text style={styles.label}>Insert your info:</Text>

        <TextInput
            style={styles.authInput}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder={"Username"}
            placeholderTextColor={"rgba(158, 157, 157, 1)"}
        />

        <TextInput
            secureTextEntry={true}
            style={styles.authInput}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder={"Password"}
            placeholderTextColor={"rgba(158, 157, 157, 1)"}
         />

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.mainBlueButton}
        ><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>

        <TouchableOpacity
           onPress={() => props.navigation.navigate('Pass')}
           style={{marginTop: 30}}
        ><Text style={styles.linkButton}>Reset password</Text></TouchableOpacity>
        
        <TouchableOpacity
           onPress={() => props.navigation.navigate('Home')}
        ><Text style={styles.linkButton}>Continue without Log In</Text></TouchableOpacity>


        <TouchableOpacity
           onPress={() => sendPushNotification()}
        ><Text style={styles.linkButton}>Get Notification</Text></TouchableOpacity>

      </View>
      {/* <Graph /> */}
    </View>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};
