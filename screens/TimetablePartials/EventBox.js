
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import styles from '../styles.js';

export default function EventBox(props) {

    const event = props.event;

    return (
        <View
            style={styles.timetableBox}
        >
            <Text style={styles.eventHour}>{event.begin}</Text>
            <View style={styles.eventBox}> 
                
                <Text style={styles.title2}>{event.title} | {event.speaker}</Text>
                <Text style={styles.eventDescription}>{event.room}</Text>
                <Text style={styles.eventDescription}>{event.begin}-{event.end}</Text>
                {
                    /* event.schedule.map((event, index) => {
                         return (<Text key={index} style={styles.eventDescription}>{event.time} | {event.description}</Text>);
                     })  */
                }
            </View>
        </View>
    );
}