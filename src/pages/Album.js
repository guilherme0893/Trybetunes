import React, { Component } from 'react';
import Header from '../components/Header';
// import AlbumCard from '../components/AlbumCards';

class Album extends Component {
  constructor() {
    super();
    // objeto resultado da chamada da api
    this.state = {
      artistId: '',
      artistName: '',
      collectionId: '',
      collectionName: '',
      collectionPrice: '',
      artworkUrl100: '',
      releaseDate: '',
      trackCount: '',
    };
  }

  render() {
    return (
      <div data-testid="page-album">
        Album
        <Header />
        {/* <AlbumCard /> */}
      </div>
    );
  }
}

export default Album;
