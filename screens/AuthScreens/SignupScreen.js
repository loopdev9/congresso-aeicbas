import React from 'react';
import Navbar from "../Partials/Navbar.js"
import Graph from "../Partials/Graph.js"
import {db ,auth} from './../../config.js'

import styles from '../styles.js';

import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image
} from 'react-native';


export default function SignupScreen(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  function NavbarAuth(props) {

    return (
        <View style={[styles.navbarAuth, styles.mainBgColor]}>  
            
            <Image source={require(`../../assets/images/logo_white.png`)} />

            <TouchableOpacity
              onPress={props.task}
              ><Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>


        </View>
    );


}

 
 function handleSignUp() {
  auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        response.user.sendEmailVerification()
        .then(function() {
          // Email sent.
          alert('Check your email')
        })
        .catch(function(error) {
          // An error happened.
        });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  return (
    <View style={styles.fullContainer}>
      <NavbarAuth task={() => props.navigation.navigate('Login')} />
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <Text style={styles.label}>Insert your info:</Text>

        <TextInput
            style={styles.authInput}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder={"Enter your email"}
            placeholderTextColor={"rgba(158, 157, 157, 1)"}
        />

        <TextInput
            secureTextEntry={true}
            style={styles.authInput}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder={"Enter your password"}
            placeholderTextColor={"rgba(158, 157, 157, 1)"}
         />

        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.mainBlueButton}
        ><Text style={styles.buttonText}>Sign Up</Text></TouchableOpacity>

        <TouchableOpacity
           onPress={() => props.navigation.navigate('Home')}
           style={{marginTop: 30}}
        ><Text style={styles.linkButton}>Continue without Log In</Text></TouchableOpacity>

        <TouchableOpacity
        ><Text style={styles.linkButton}> </Text></TouchableOpacity>

      </View>
      <Graph />
    </View>
  );
}

SignupScreen.navigationOptions = {
  header: null,
};
