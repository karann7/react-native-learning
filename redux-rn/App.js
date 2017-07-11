import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './src/components/common/Header';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';

export default class App extends Component {
  render() {
    let { container } = styles; 
    return (
      <Provider store={ createStore(reducers) }>
        <View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
