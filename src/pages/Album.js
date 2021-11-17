import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor(props) {
    super(props);
    // objeto resultado da chamada da api
    // no API o id está dentro do template, então ele será alterado no state
    // o :id está no route --> exact path="/album/:id"  --> pegar esse id
    // --> como na aula --> passar como props
    const {
      match: {
        params: { id },
      },
    } = this.props;

    this.state = {
      // artistId: '',
      artistName: '',
      // collectionId: '',
      // collectionName: '',
      // collectionPrice: '',
      // artworkUrl100: '',
      // releaseDate: '',
      // trackCount: '',
      songs: [],
      id,
    };
  }

  componentDidMount() {
    this.getSongs();
  // algo aqui estava quebrando o fetch
  // acredito que tenha sido problema de fora do código
  }

  getSongs = () => {
    // console.log('teste') ---> ok!;
    const { id } = this.state;
    getMusics(id)
      .then((music) => {
        this.setState({
          // isso resolve o requisito mas ao mudar de album fico com problemas
          // ai os nomes duplicam --> comentar tudo e fazer outra sem os states
          artistName: music[0].artistName,
          collectionName: music[0].collectionName,
        }, () => {
          this.setState({ songs: [...music] });
        });
        // console.log('carregando completo!!'); --> ok!
        // console.log(music);
      });
  };

  render() {
    // console.log('eu sou o album.js e tenho o match e o param id');
    // console.log(this.props);
    // console.log(this.props.match);
    // console.log(typeof this.props.match);
    // console.log(this.props.match.params);
    // console.log(typeof this.props.match.params);
    // console.log(this.props.match.params.id);
    // console.log(typeof this.props.match.params.id);
    const {
      artistName,
      collectionName,
      songs,
    } = this.state;
    // console.log('estou acima das songs!');
    // console.log(songs);
    // console.log(artistName);
    // console.log(this.state);
    return (
      <div data-testid="page-album">
        Album
        <Header />
        <div>
          <span data-testid="album-name">{ collectionName }</span>
          <span data-testid="artist-name">{ artistName }</span>
          <div>
            {/* // caso não traga de volta nenhuma musica a partir do index delas */}
            {songs.map((song, index) => (
              index === 0
                ? 'We found no track for this album'
                : (
                  <MusicCard
                    key={ song.trackId }
                    trackName={ song.trackName }
                    src={ song.previewUrl }
                  />)
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// Uso do shape porque é um array de objeto e estamos buscando o proptypes deles e do id dentro dele
Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
