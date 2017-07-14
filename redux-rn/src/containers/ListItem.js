// Karan Singh
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardSection } from '../components/common';
import { connect } from 'react-redux';

class ListItem extends Component {
  render() {
    let { titleStyle } = styles;
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

export { ListItem };