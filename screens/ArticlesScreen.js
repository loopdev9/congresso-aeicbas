import React, { useEffect, useState } from 'react';
import { db } from "../config.js";
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import Navbar from "./Partials/Navbar.js";
import ArticleBox from "./Partials/ArticleBox.js";

import styles from './styles.js';


export default function ArticlesScreen(props) {

  const [articles, setArticles] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    db.collection("Article").onSnapshot((snapshot) => {

      for (let doc of snapshot.docs) {

        let data = doc.data();

        setArticles(oldArticles => oldArticles.concat(data));

      }
      setMounted(true);
    })
  }, [])

  if (!mounted) {
    return (<ActivityIndicator size="large" color="#1d2d40" />);
  }

  else {
    return (
      <View style={styles.fullContainer}>
        <Navbar />
        <ScrollView
          style={{width: "100%"}}
        >

          <Text style={styles.title}>ARTIGOS</Text>

          <View>
            {
              articles.map((article, index) => {
                  return (<ArticleBox key={index} index={index} article={article} navigation={props.navigation} />);
              })
            }
          </View>
    {/* 
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Event')}
          ><Text>Event</Text></TouchableOpacity> */}

        </ScrollView>

      </View>
    );
  }
}

ArticlesScreen.navigationOptions = {
  header: null,
};

