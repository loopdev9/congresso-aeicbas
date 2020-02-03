import React from 'react';
import { View, Image, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


import styles from '../styles.js';

// const dimensions = Dimensions.get('window');
// const imageHeight = Math.round(dimensions.width * 9 / 16);
// const imageWidth = dimensions.width;


export default function Navbar(props) {

    return (
        <View style={[styles.navbarContainer, styles.mainBgColor]}>

            <Image source={require(`../../assets/images/logo_white.png`)} />

            <Image
                source={require(`../../assets/images/graph_white.png`)}
                style={{ width: 155, height: 100 }} />
        </View>
    );








}