
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../styles.js';


export default function DayBox(props) {
    if (props.selected) {

        return (
            <View
                style={styles.dayBoxSelected}
            >
                <Text style={[styles.dayBoxText, { color: "white" }]}>{props.date}</Text>
            </View>
        );

    }
    else {

        return (
            <TouchableOpacity
                style={styles.dayBox}
                onPress={() => props.setSelected(props.index)}
            >
                <Text style={styles.dayBoxText}>{props.date}</Text>
            </TouchableOpacity>
        );
    }
}