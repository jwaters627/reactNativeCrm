/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';



export default class App extends Component<{}> {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCf7Y4Lj0myljh89AVSlNJ3MJTaPRsUFSI",
      authDomain: "crmapp-c32a9.firebaseapp.com",
      databaseURL: "https://crmapp-c32a9.firebaseio.com",
      projectId: "crmapp-c32a9",
      storageBucket: "",
      messagingSenderId: "52694887731"
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          CRM!!!
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
