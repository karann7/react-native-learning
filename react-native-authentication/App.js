import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Header, Button, Card, CardSection, Spinner } from './src/components/common';
import { Signup } from './src/components/Signup'
import firebase from 'firebase';
import { firebase_config } from './config/config.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: null,
      email: ''
    }
  }
  componentWillMount(){
    // Initialize Firebase for more security the .js should be a .json
    // and the file should not be uploaded to github
    firebase.initializeApp(firebase_config);

    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.setState({ loggedIn: true, email: user.email });
        console.log(JSON.stringify(user, null, 2));
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
  }
  profile() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <View>
            <Header>
              {this.state.email}
            </Header>
            <Card>
              <CardSection>
                <Button onPress={()=> firebase.auth().signOut()}>
                  Sign Out
                </Button>
              </CardSection>
            </Card>
          </View>
        );
      case false:
        return (
          <View>
          <Header>
          Please Log In
        </Header>
        <Signup />
        </View>
        );
      default:
      return <Spinner size={'large'} /> 
    }
  }
  render() {
    return (
      <View>
        
        {this.profile()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33ffcc'
  },
});
