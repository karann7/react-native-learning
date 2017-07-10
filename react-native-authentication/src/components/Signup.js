// Karan Singh
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardSection, Button, FormInput } from './common';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
  render() {
    let { container } = styles;
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

        <CardSection>
          <Button onPress={() => console.log(`Email: ${this.state.email} Password: ${this.state.password}`)}>
            Log In
            </Button>
        </CardSection>

      </Card>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
});

export { Signup };
