// Karan Singh
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from '../components/ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }
  renderRow(library) {
    return <ListItem library={library} />;
  }
  render() {
    return (
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
    );
  }
}

const mapstateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapstateToProps)(LibraryList) ;