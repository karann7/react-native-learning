import React, { Component } from 'react';
import { View } from 'react-native';
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
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }
  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>)
  }
  render() {
    return (
      <View>
      {this.renderAlbums()}
      </View>
    );
  }
}


export default AlbumbList;