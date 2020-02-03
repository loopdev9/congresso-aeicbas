import React from 'react';
import {
    WebView, View
} from 'react-native';

import Navbar from "./Partials/Navbar.js";

export default function Article(props) {

    const source = props.navigation.state.params.source;

    return (
        <View style={{ flex: 1 }}>
            <Navbar />
            <View style={{ flex: 1 }}>
                <WebView
                    useWebKit={true} 
                    style={{flex:1}} 
                    source={{uri:source}} 
                    startInLoadingState={true}
                />
            </View>
        </View>
    );
}



Article.navigationOptions = {
    header: null,
};