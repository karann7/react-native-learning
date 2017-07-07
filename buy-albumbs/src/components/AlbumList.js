import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumbList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
    this.renderAlbums = this.renderAlbums.bind(this);
  }
  componentWillMount() {
    fetch('https://karann7.github.io/albumbs.json')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>)
  }
  render() {
    return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }
}


export default AlbumbList;