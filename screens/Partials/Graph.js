
import React from 'react';
import { View, Image, Dimensions }  from 'react-native';

import styles from '../styles.js';

// const dimensions = Dimensions.get('window');
// const imageHeight = Math.round(dimensions.width * 9 / 16);
// const imageWidth = dimensions.width;


export default function Graph(props) {

    if (props.turned) {
            
        return (
            <View 
                style = {[styles.graphContainer, styles.turn180]}
            >
                <Image 
                    source={require("../../assets/images/graph.png")} />
            </View>
        );
    }
  
    return (
        <View 
            style = {styles.graphContainer}
        >
            <Image 
                source={require("../../assets/images/graph.png")} />
        </View>
    );
}