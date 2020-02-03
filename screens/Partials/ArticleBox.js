
import React, { useState, useEffect } from 'react';
import { Text, Linking }  from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import styles from '../styles.js';
import storage from '../../config';

export default function ArticleBox(props) {

    const article = props.article;
    const [source, setSource] = useState("https://firebasestorage.googleapis.com/v0/b/congresso-aeicbas.appspot.com/o/articles%2FUntitled%20Diagram.pdf?alt=media&token=9179abae-f37c-4fd3-ac06-ce92267e920f");

    let mainColor = "rgba(32, 45, 63, 1)";
    let scndColor = "rgba(220, 220, 220, 1)";

    useEffect(() => {
        let pathReference = storage.storage.ref("articles/Untitled Diagram.pdf");

        pathReference.getDownloadURL().then((url) => {
            setSource(url);
        });
    })

    if (props.index % 2 == 0 ) {
        let tmp = mainColor;
        mainColor = scndColor;
        scndColor = tmp;
    }

    return (
        <TouchableOpacity 
            style={[styles.eventBox, {backgroundColor: mainColor, marginBottom: 10, alignSelf: 'center', marginRight:0 }]}
            onPress={() => props.navigation.navigate("Article", { source })}
        >
            <Text style={[styles.title2, {color: scndColor, fontSize: 20}]}>{article.title}</Text>
        </TouchableOpacity>
    );
}