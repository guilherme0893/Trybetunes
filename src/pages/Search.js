import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      isButtonDisabled: true,
      searchButtonClick: false,
      // loading: false,
      // resultado da api muda o state - false não mostra
      searchSuccessful: false,
      // resposta renderizada da api muda o state
      // searchResult: '',
      // os albuns sao retornadas num array de objetos
      albumsReturned: [],
      // mensagem a ser mostrada caso dẽ falha
      searchAnswer: '',
      // seguindo a tread do João Melo, onde o João Oliveira Avellino
      // indicou criar um novo state para receber o que recebia o input
      searchInputValue: '',
    };
  }

  onInputSearch = (event) => {
    const { value } = event.target;
    // console.log(value);
    // console.log(event);
    this.setState({
      searchInput: value,
    }, () => {
      this.setState({
        searchInputValue: value,
      });
      this.validateButtonSearch();
    });
  }

  validateButtonSearch = () => {
    const { searchInput } = this.state;
    const inputControl = 2;
    if (searchInput.length >= inputControl) {
      // console.log('funcionando!!'); -> ok;
      return this.setState({ isButtonDisabled: false });
    } return this.setState({ isButtonDisabled: true });
  }

  onSearchButtonClick = (event) => {
    // tava faltando essa cara aqui! e acho que no login tb!!
    event.preventDefault();
    // console.log(event.target.type);
    // console.log('estou funcionando!');
    const { searchInputValue } = this.state;
    // console.log(searchInput) --> ok
    this.setState({
      searchButtonClick: true,
      searchInputValue: '',
    }, () => {
      // pelo que entendi, o parametro que é o state é transformado
      // no artisto que é buscado dentro de um template literals
      // --> isso é async-await, pode dar certo ou errado --> check!
      // const searchAlbumResponse = await
      searchAlbumsAPI(searchInputValue)
        // .then(console.log('Estou funcionando!')) -- ok!
        .then((searchAlbumResponse) => {
          this.setState({
            albumsReturned: [...searchAlbumResponse],
          });
          this.setState({
            searchSuccessful: true,
            searchButtonClick: false,
          }, () => {
            // estava chamando a função errada
            this.onSearchResult();
          });
          // console.log(searchAlbumResponse) --> ok
          // joguei beatles e o artistId e name são iguais -- ok
        });
    });
  }

  onSearchResult = () => {
    const {
      // searchSuccessful,
      // searchInput,
      albumsReturned,
      searchInputValue,
      // searchAnswer,
    } = this.state;
    if (albumsReturned.length > 0) {
      this.setState({
        searchAnswer: `Resultado de ${searchInputValue}`,
      });
    } else {
      this.setState({
        searchAnswer: 'Nenhum álbum foi encontrado',
      });
    }
  }

  render() {
    const {
      // dava errado porque a função é uma prop, não um state!!!
      // onInputSearch,
      isButtonDisabled,
      searchAnswer,
      albumsReturned,
      searchButtonClick,
      // searchResult,
      searchSuccessful,
      // searchInputValue,
    } = this.state;
    return (
      <div>
        <div data-testid="page-search">
          Search
          <Header />
          { searchButtonClick ? (
            <Loading />
          ) : (
            <form>
              <label htmlFor="search-artist-input">
                <input
                  id="search-artist-input"
                  data-testid="search-artist-input"
                  type="search"
                  placeholder="Name of artist"
                  name="search-artist-input"
                  onChange={ this.onInputSearch }
                />
              </label>
              <button
                type="submit"
                data-testid="search-artist-button"
                disabled={ isButtonDisabled }
                onClick={ this.onSearchButtonClick }
              >
                Pesquisar
              </button>
            </form>)}
        </div>
        <div>
          { searchSuccessful ? (
            <>
              { albumsReturned.map((album) => (
                <ul key={ album.collectionId }>
                  <Link
                    data-testid={ `link-to-album-${album.collectionId}` }
                    to={ `album/${album.collectionId}` }
                  >
                    <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                    <li>{ album.collectionName }</li>
                  </Link>
                </ul>
              )) }
            </>
          )
            : <span>{ searchAnswer }</span> }
        </div>
      </div>
    );
  }
}

export default Search;
