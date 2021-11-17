import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import Loading from '../Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckBoxChecked: false,
      // onCheckBoxClick: false,
    };
  }

  handleOnCheckBoxClick = () => {
    const { trackId } = this.props;
    this.setState({
      isCheckBoxChecked: true,
    }, () => {
      // no addSong teoricamente entra a song
      addSong(trackId);
    });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { isCheckBoxChecked } = this.state;
    console.log(trackName);
    return (
      <div>
        <span>{ trackName }</span>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor="trackId">
          Favorita
          <input
            id={ trackId }
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            checked={ isCheckBoxChecked }
            onChange={ this.handleOnCheckBoxClick }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
};

export default MusicCard;
