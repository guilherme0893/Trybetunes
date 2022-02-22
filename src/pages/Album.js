import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor(props) {
    super(props);
    const {
      match: {
        params: { id },
      },
    } = this.props;

    this.state = {
      artistName: '',
      collectionName: '',
      artworkUrl100: '',
      songs: [],
      id,
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs = () => {
    const { id } = this.state;
    getMusics(id)
      .then((music) => {
        this.setState({
          artistName: music[0].artistName,
          collectionName: music[0].collectionName,
        }, () => {
          this.setState({ songs: [...music] });
        });
      });
  };

  render() {
    const {
      artistName,
      collectionName,
      songs,
      artworkUrl100,
    } = this.state;
    return (
      <div data-testid="page-album">
        Album
        <Header />
        <div>
          <img src={ artworkUrl100 } alt={ collectionName } />
          <span data-testid="album-name">{ collectionName }</span>
          <span data-testid="artist-name">{ artistName }</span>
          <div>
            {songs.map((song, index) => (
              index === 0
                ? 'We found no track for this album'
                : (
                  <MusicCard
                    key={ song.trackId }
                    trackName={ song.trackName }
                    previewUrl={ song.previewUrl }
                    trackId={ song.trackId }
                  />)
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
