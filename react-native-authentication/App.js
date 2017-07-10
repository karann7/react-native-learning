import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/common';
import { Signup } from './src/components/Signup'
import firebase from 'firebase';
import { firebase_config } from './config/config.js';
export default class App extends Component {
  componentWillMount(){
    // Initialize Firebase for more security the .js should be a .json
    // and the file should not be uploaded to github
    firebase.initializeApp(firebase_config);
  }
  render() {
    return (
      <View>
        <Header>
          Firebase Authentication
        </Header>
       <Signup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33ffcc'
  },
});
