import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckBoxChecked: false,
      onCheckBoxClick: false,
    };
    // const {
    //   trackId,
    // } = this.props;
  }

  componentDidMount() {
    this.loadFavoritesSongs();
  }

  loadFavoritesSongs = () => {
    const { trackId } = this.props;
    getFavoriteSongs()
      .then((favorites) => {
        if (favorites.some((favorite) => favorite.trackId === trackId)) {
          this.setState({ isCheckBoxChecked: true });
        }
      });
  }

  handleOnCheckBoxClick = () => {
    const { trackId } = this.props;
    this.setState({
      isCheckBoxChecked: true,
      onCheckBoxClick: true,
    }, () => {
      addSong(trackId)
        .then(() => {
          this.setState({ onCheckBoxClick: false });
        });
    });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { isCheckBoxChecked, onCheckBoxClick } = this.state;
    return (
      <div
        // className="
        //   // d-flex
        //   // justify-content-center
        //   // m-3
        //   // p-3
        //   // w-auto"
      >
        {onCheckBoxClick
          ? (<Loading />)
          : (
            <div
              // className="
              //   d-flex border p-3 w-25
              //   flex-column align-items-center"
            >
              <span>{ trackName }</span>
              <div
                // className="m-2"
              >
                <audio data-testid="audio-component" src={ previewUrl } controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  <code>audio</code>
                  .
                </audio>
              </div>
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
            </div>)}
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
