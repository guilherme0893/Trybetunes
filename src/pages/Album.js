import React, { Component } from 'react';
import Header from '../components/Header';
// import AlbumCard from '../components/AlbumCards';

class Album extends Component {
  constructor(props) {
    super(props);
    // objeto resultado da chamada da api
    this.state = {
      // artistId: '',
      artistName: '',
      // collectionId: '',
      collectionName: '',
      // collectionPrice: '',
      artworkUrl100: '',
      // releaseDate: '',
      // trackCount: '',
    };
  }

  render() {
    const {
      // artistId,
      artistName,
      // collectionId,
      collectionName,
      // collectionPrice,
      artworkUrl100,
      // releaseDate,
      // trackCount,
    } = this.state;
    return (
      <div data-testid="page-album">
        Album
        <Header />
        {/* <AlbumCard /> */}
        <img src={ artworkUrl100 } alt={ collectionName } />
        <span>{ collectionName }</span>
        <span>{artistName }</span>
        {/* <span>{ releaseDate }</span> */}
      </div>
    );
  }
}

export default Album;
