import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MusicCard extends Component {
  // constructor() {
  //   super(

  //   );
  // }
  render() {
    return (
      <div>
        <span data-testid="artist-name">Artist</span>
        <span data-testid="album-name">Album</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

export default MusicCard;
