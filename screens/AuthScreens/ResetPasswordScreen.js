import React from 'react';
import Navbar from "../Partials/Navbar.js"
import Graph from "../Partials/Graph.js"

import styles from '../styles.js';

import {
  Text,
  TouchableOpacity,
  View,
  TextInput, 
  Image
} from 'react-native';

export default function LoginScreen(props) {

  const [email, setEmail] = React.useState('');

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

  function handlePassReset(){

    firebase.auth().sendPasswordResetEmail( email , null)
    .then(function() {
      // Password reset email sent.
      alert('Check your email')
    })
    .catch(function(error) {
      // Error occurred. Inspect error.code.
      alert('incorrect email')
    });

  }

  return (
    <View style={styles.fullContainer}>
      <NavbarAuth task={() => props.navigation.navigate('Login')} />
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <Text style={styles.label}>Insert your email:</Text>

        <TextInput
            style={styles.authInput}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder={"Username"}
            placeholderTextColor={"rgba(158, 157, 157, 1)"}
        />

        <TouchableOpacity
           onPress={handlePassReset}
          style={styles.mainBlueButton}
        ><Text style={styles.buttonText}>Reset Password</Text></TouchableOpacity>

        <TouchableOpacity
           onPress={() => props.navigation.navigate('Home')}
           style={{marginTop: 30}}
        ><Text style={styles.linkButton}>Continue without Log In</Text></TouchableOpacity>

      </View>
      <Graph />
    </View>
  );
}

LoginScreen.navigationOptions = {
     
     header: null,
 
  
};
