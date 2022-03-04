import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Header from '../components/Header';
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
      releaseYear: '',
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
          artworkUrl100: music[0].artworkUrl100,
          releaseYear: music[0].releaseDate,
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
      releaseYear,
    } = this.state;
    const limit = 4;
    const novo = releaseYear.substring(0, limit);
    return (
      <div data-testid="page-album">
        {/* <Header /> */}
        <h1 className="d-flex justify-content-center pt-5 pb-4">
          Results for
          {
            collectionName
          }
        </h1>
        <div className="d-flex flex-row justify-content-center pt-5 pb-4">
          <img className="h-100" src={ artworkUrl100 } alt={ collectionName } />
          <div className="d-flex flex-column m-3 p-2">
            <h3 data-testid="artist-name">{ artistName }</h3>
            <h3>
              Release year
              {
                novo
              }
            </h3>
          </div>
        </div>
        {songs.map((song, index) => (
          index === 0
            ? null
            : (
              <div key={ song.trackId }>
                <MusicCard
                  trackName={ song.trackName }
                  previewUrl={ song.previewUrl }
                  trackId={ song.trackId }
                />
              </div>)
        ))}
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
