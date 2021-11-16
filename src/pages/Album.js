import React, { Component } from 'react';
import Header from '../components/Header';
// import AlbumCard from '../components/AlbumCards';

class Album extends Component {
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
