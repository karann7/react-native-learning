// Karan Singh
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';

class LibraryList extends Component {
  cards() {
    console.log(this.props.libraries)
    return this.props.libraries.map( item => {
      return (
        <Card key={item.title}>
          <CardSection>
            <Text>{item.title}</Text>
          </CardSection>
          
          <CardSection>
            <Text>{item.description}</Text>
          </CardSection>
        </Card>
      );
    });
  }
  render() {
    return (
      <ScrollView >
        {this.cards()}
      </ScrollView>
    );
  }
}

const mapstateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapstateToProps)(LibraryList) ;
