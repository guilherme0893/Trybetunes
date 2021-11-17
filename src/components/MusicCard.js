import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class MusicCard extends Component {
  render() {
    const { trackName } = this.props;
    console.log(trackName);
    return (
      <div>
        <span>{ trackName }</span>
        <audio
          data-testid="audio-component" controls>
          {/* src={ previewUrl } o src ta quebrando o codigo!! */}
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
};

export default MusicCard;
