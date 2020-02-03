
import React, { useState } from 'react';
import { Text, View }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles.js';

export default function BreakBox(props) {

    const event = props.event;

    return (
        <View
            style={styles.timetableBox}
        >
            <Text style={styles.eventHour}>{event.begin}</Text>
            <TouchableOpacity 
                style={[styles.eventBox, {backgroundColor: "rgba(220, 220, 220, 1)"}]}
                // onPress={() => props.setSelected(props.index)}
            >
                <Text style={[styles.title2, {color: "black"}]}>{event.title}</Text>
                <Text style={styles.eventDescription}>{event.begin}-{event.end}</Text>                
            </TouchableOpacity>
        </View>
    );
    //<Text style={[styles.eventDescription, {color: "black"}]}>{event.schedule[0].time} | {event.schedule[0].place}</Text>
}