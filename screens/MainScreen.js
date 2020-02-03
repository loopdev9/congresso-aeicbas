import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import Navbar from "./Partials/Navbar.js";
import Graph from "./Partials/Graph.js";
import HomeBtn from "./Partials/HomeBtn.js";

import styles from './styles.js';

import { auth } from "../config.js";

let signOutUser = async (props) => {
  try {
      await auth.signOut();
      props.navigation.navigate('Auth');
    } catch (e) {
      console.log(e);
  }
}

function AuthButton (props) {

  if (auth.currentUser) {
    return (
      <View>
        <HomeBtn link="Favourites" title="Meu Perfil" icon="profile" navigation={props.navigation}/>
        <TouchableOpacity
          onPress={() => signOutUser(props) }
          style={{marginTop: 30}}
        >
          <Text style={[styles.linkButton, {alignSelf: 'center'}]}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Auth')}
      style={{marginTop: 30}}
    >
      <Text style={styles.linkButton}>Go back to login</Text>
    </TouchableOpacity>
  );

}

export default function MainScreen(props) {

  return (
    <View style={styles.fullContainer}>
      <Navbar />
      {/* <Graph turned={true} /> */}
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <HomeBtn link="Timetable" title="Programa" icon="schedule" navigation={props.navigation}/>
        <HomeBtn link="Sponsors" title="Patrocinadores" icon="sponsors" navigation={props.navigation}/>
        <HomeBtn link="Articles" title="Artigos" icon="news" navigation={props.navigation}/>
        {/* <HomeBtn link="Map" title="Mapa" icon="" navigation={props.navigation}/> */}
        {/* <HomeBtn link="NewEvent" title="Novo Evento" icon="" navigation={props.navigation}/> */}
      
        <AuthButton navigation={props.navigation} />
      </View>
      <Graph />
    </View>
  );
}

MainScreen.navigationOptions = {
  header: null,
};

