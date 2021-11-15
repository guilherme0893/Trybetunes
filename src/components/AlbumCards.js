import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AlbumCard extends Component {
  render() {
    return (
      <div>
        {/* // link similar ao da aula ao vivo */}
        <Link
          to={ `album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        />
      </div>

    );
  }
}

export default AlbumCard;

// dados do album
// [
//   {
//     artistId: 12,
//     artistName: "Artist Name",
//     collectionId: 123,
//     collectionName: "Collection Name",
//     collectionPrice: 12.25,
//     artworkUrl100: "https://url-to-image",
//     releaseDate: "2012-03-02T08:00:00Z",
//     trackCount: 8,
//   }
// ]
