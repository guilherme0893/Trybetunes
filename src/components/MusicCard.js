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
    // funcionalidade de remover vai entrar aqui, mas agora é uma pausa
    // chamar os states, checar se ta true ou false e aplicar a logica de mudança com setstate
    this.setState({
      isCheckBoxChecked: true,
      onCheckBoxClick: true,
    }, () => {
      // no addSong teoricamente entra a song
      addSong(trackId)
        .then(() => {
          this.setState({ onCheckBoxClick: false });
        });
    });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { isCheckBoxChecked, onCheckBoxClick } = this.state;
    console.log(trackName);
    return (
      <div>
        {onCheckBoxClick
          ? (<Loading />)
          : (
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
