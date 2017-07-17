// Karan Singh
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../components/common';
import * as actions from '../actions';

class ListItem extends Component {
  showDescription(id){
    if(this.props.selectedLibraryId === id){
      return (
        <CardSection>
        <Text>{this.props.library.description}</Text>
      </CardSection>
      );
    }
  }
  render() {
    let { titleStyle } = styles;
    let { library: { id, title, description } } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={()=>this.props.selectLibrary(id)}>
        <View>
          <Card key={id}>
            <CardSection>
              <Text style={titleStyle}>{title}</Text>
            </CardSection>
            {this.showDescription(id)}
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

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};
export default connect(mapStateToProps, actions)(ListItem);