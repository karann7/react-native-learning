import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common';

export default class App extends Component {
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
