import React from 'react';
import {View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  // further destructring the album below
  let { title, artist, thumbnail_image, image, url } = album;
  //destuctruing the styles
  const { 
    headerContentStyle,
    thumbnailStyle,
    albumArt,
    thumnailContainerStyle,
    titleStyle,
    purchaseBtn
  } = styles;
  
  return (
    <Card>
      <CardSection>
      <View style={thumnailContainerStyle}>
        <Image
          style={thumbnailStyle}
          source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={headerContentStyle}>
        <Text style={titleStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
      </CardSection>
      <CardSection>
        <Image
        style={albumArt}
        source={{uri: image}}/>
      </CardSection>
      <CardSection >
        <Button onPress={()=> Linking.openURL(url)}>
          Purchase on Amazon
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  thumnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumArt: {
    flex: 1,
    width: null,
    height: 400
  },
  titleStyle: {
    fontSize: 18
  },
  purchaseBtn: {
    
  }
}
export default AlbumDetail;