// Karan Singh
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../components/common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut();
  }
  showDescription(){
    let { library: { description }, expanded } = this.props;
    let { descriptionStyle } = styles;
    if(expanded){
      return (
        <CardSection>
        <Text style={descriptionStyle}>{description}</Text>
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
  descriptionStyle: {
    textAlign: 'center',
    color: 'red'
  }
});

const mapStateToProps = (state, ownProps) => {
  let expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);