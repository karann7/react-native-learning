// Karan Singh
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  connect } from 'react-redux';
import { Card, CardSection } from '../components/common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    let { titleStyle } = styles;
    console.log(this.props);
    return (
      <Card  key={this.props.library}>
        <CardSection>
          <Text style={titleStyle}>{this.props.library.title}</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
});

export default connect(null, actions)(ListItem);