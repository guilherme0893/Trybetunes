import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      isButtonDisabled: true,
      searchButtonClick: false,
      loading: false,
      searchSuccessful: false,
    };
  }

  onInputSearch = (event) => {
    const { value } = event.target;
    this.setState({
      searchInput: value,
    }, () => {
      this.validateButtonSearch();
    });
  }

  validateButtonSearch = () => {
    const { searchInput } = this.state;
    const inputControl = 2;
    if (searchInput.length >= inputControl) {
      // console.log('funcionando!!');
      return this.setState({ isButtonDisabled: false });
    } return this.setState({ isButtonDisabled: true });
  }

  onSearchButtonClick = async () => {
    const { searchInput } = this.state;
    // this.setState({
    //   searchButtonClick: true,
    //   searchInput: '',
    // });
    // pelo que entendi, o parametro que é o state é transformado
    // no artisto que é buscado dentro de um template literals
    // --> isso é async-await, pode dar certo ou errado --> check!
    const searchAlbumResponse = await searchAlbumsAPI(searchInput);
    if (searchAlbumResponse.length > 0 || searchAlbumResponse !== undefined) {
      return this.setState({ searchSuccessful: true, searchInput: '' });
    } this.setState({ searchSuccessful: false });
  }

  onSearchResult = () => {
    const { searchSuccessful, searchInput } = this.state;
    if (searchSuccessful === true) {
      return <span>{`Resultado de ${searchInput}`}</span>;
    } return <span>Nenhum álbum foi encontrado</span>;
  }

  render() {
    const {
      // dava errado porque a função é uma prop, não um state!!!
      // onInputSearch,
      isButtonDisabled,
      searchButtonClick,
    } = this.state;
    return (
      <div data-testid="page-search">
        Search
        <Header />
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
            // onClick="{}"
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
