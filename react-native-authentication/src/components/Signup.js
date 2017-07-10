// Karan Singh
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardSection, Button, FormInput, Spinner } from './common';
import firebase from 'firebase';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', authfail: '', loading: null };
  }
  onButtonPress() {
    this.setState({ authfail: '', loading: true });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner />
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log In
        </Button>
      )
    }
  }
  onLoginFail(){
    this.setState({ loading: false, authfail: 'Authentication Failed.', password: '' });

  }
  onLoginSuccess(){
    this.setState({ loading: false, authfail: '', email: '', password: ''});
    return (
      <Card>
        <CardSection>
          <Text>Loggin in</Text>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
          Log Out
        </Button>
        </CardSection>
      </Card>
    );
  }
  render() {
    let { errorText, loadingText } = styles;
    console.log(this.state.loading);
    return (
      <Card>
        <CardSection>
          <FormInput
            text={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder={'example@icloud.com'}
            label={'E-mail:'}
            autoCorrect={false}
            autoFocus={true}
            keyboardType={'email-address'}
            returnKeyLabel={'Next'}
            secureTextEntry={false}
          />
        </CardSection>

        <CardSection>
          <FormInput
            text={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder={'Password'}
            label={'Password:'}
            autoCorrect={false}
            autoFocus={false}
            keyboardType={'default'}
            returnKeyLabel={'Submit'}
            secureTextEntry={true}
          />
        </CardSection>

        <Text style={errorText}>{this.state.authfail}</Text>

        <CardSection>
          { this.renderButton() }
        </CardSection>

      </Card>
    );
  }
}
const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  },
  loadingText: {
    color: 'green',
    fontSize: 20,
    alignSelf: 'center'
  }
});

export { Signup };
