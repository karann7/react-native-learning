import React, { Component } from 'react';
import { Stylesheet, Text, View } from 'react-native';

class Header extends Component {
  render() {
    const { viewStyle, textStyle } = styles;
    return (
      <View style={viewStyle}>
      <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};


export default Header;