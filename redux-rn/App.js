import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './src/components/common/Header';
import reducers from './src/reducers';
import LibraryList from './src/containers/LibraryList';

export default class App extends Component {
  render() {
    let { container } = styles; 
    return (
      <Provider store={ createStore(reducers) }>
        <View style={container}>
          <Header> React - Redux</Header>
        <LibraryList />
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
});
