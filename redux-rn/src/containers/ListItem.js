// Karan Singh
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../components/common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    let { titleStyle } = styles;
    let { library: { id, title } } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={()=>this.props.selectLibrary(id)}>
        <View>
          <Card key={id}>
            <CardSection>
              <Text style={titleStyle}>{title}</Text>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
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