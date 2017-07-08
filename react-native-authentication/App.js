import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common';
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAIR6i2ChBKvzWF6pwvuocU0c9FfxW_D2M",
    authDomain: "rn-auth-97b27.firebaseapp.com",
    databaseURL: "https://rn-auth-97b27.firebaseio.com",
    projectId: "rn-auth-97b27",
    storageBucket: "rn-auth-97b27.appspot.com",
    messagingSenderId: "1071721524183"
  };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <View>
        <Header>
          Firebase Authentication
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33ffcc'
  },
});
