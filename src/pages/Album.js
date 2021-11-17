import React, { Component } from 'react';
import Header from '../components/Header';
// import AlbumCard from '../components/AlbumCards';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor(props) {
    super(props);
    // objeto resultado da chamada da api
    this.state = {
      // artistId: '',
      artistName: '',
      // collectionId: '',
      collectionName: '',
      // collectionPrice: '',
      artworkUrl100: '',
      // releaseDate: '',
      // trackCount: '',
      songs: [],
      // id: '',
    };
    const {
      id,
    } = this.props;

    getSongs = () => {
      // no API o id está dentro do template, então ele será alterado no state
      // o :id está no route --> exact path="/album/:id"  --> pegar esse id
      // --> como na aula --> passar como props
      const { id } = this.state;
      getMusics(id)
        // .then(console.log('teste'))
        .then((music) => {
          this.setState({
            artistName: '',
            collectionName: '',
            artworkUrl100: '',
          }, () => {
            this.setState({ songs: [...music] });
          });
        });
    };
  }

  render() {
    const {
      // artistId,
      artistName,
      // collectionId,
      collectionName,
      // collectionPrice,
      artworkUrl100,
      // releaseDate,
      // trackCount,
      songs,
      // id,
    } = this.state;
    return (
      <div data-testid="page-album">
        Album
        <Header />
        {/* <AlbumCard /> */}
        <img src={ artworkUrl100 } alt={ collectionName } />
        <span>{ collectionName }</span>
        <span>{artistName }</span>
        {/* <span>{ releaseDate }</span> */}
      </div>
    );
  }
}

export default Album;
