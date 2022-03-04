import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      isButtonDisabled: true,
      searchButtonClick: false,
      searchSuccessful: false,
      albumsReturned: [],
      searchAnswer: '',
      searchInputValue: '',
    };
  }

  onInputSearch = (event) => {
    const { value } = event.target;
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
      return this.setState({ isButtonDisabled: false });
    } return this.setState({ isButtonDisabled: true });
  }

  onSearchButtonClick = (event) => {
    event.preventDefault();
    const { searchInputValue } = this.state;
    this.setState({
      searchButtonClick: true,
      searchInputValue: '',
    }, () => {
      searchAlbumsAPI(searchInputValue)
        .then((searchAlbumResponse) => {
          this.setState({
            albumsReturned: [...searchAlbumResponse],
          });
          this.setState({
            searchSuccessful: true,
            searchButtonClick: false,
          }, () => {
            this.onSearchResult();
          });
        });
    });
  }

  onSearchResult = () => {
    const {
      searchInput,
      albumsReturned,
    } = this.state;
    if (albumsReturned.length > 0) {
      this.setState({
        searchAnswer: `Resultado de álbuns de ${searchInput}`,
      });
    } else {
      this.setState({
        searchAnswer: 'Nenhum álbum foi encontrado',
      });
    }
  }

  render() {
    const {
      isButtonDisabled,
      searchAnswer,
      albumsReturned,
      searchButtonClick,
      searchSuccessful,
    } = this.state;
    return (
      <div
        className="w-100 h-100"
        style={ { backgroundColor: '#353B3C' } }
      >
        <div data-testid="page-search">
          <Header />
          {searchButtonClick ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <form style={ { margin: 'auto' } }>
              <div
                className="d-flex justify-content-center pt-4 pb-3"
              >
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
              </div>
              <div className="d-flex justify-content-center pb-3">
                <Button
                  style={ {
                    backgroundColor: '#846A6A',
                    padding: '10px',
                    color: 'white',
                    borderRadius: 4,
                  } }
                  size="lg"
                  type="submit"
                  data-testid="search-artist-button"
                  disabled={ isButtonDisabled }
                  onClick={ this.onSearchButtonClick }
                >
                  Pesquisar
                </Button>
              </div>
            </form>)}
          {searchSuccessful ? (
            <>
              <h3
                className="d-flex justify-content-center pt-4 pb-3 text-light"
              >
                {searchAnswer}
              </h3>
              <div className="d-flex flex-wrap justify-content-around pb-4">
                {albumsReturned.map((album) => (
                  <div
                    key={ album.collectionId }
                  >
                    <div
                      style={ { width: '500px', backgroundColor: '#C6C7C4' } }
                      className="
                      d-flex
                      flex-column
                      align-items-center
                      m-3
                      p-5
                      border
                      rounded"
                      // bg-light"
                    >
                      <Link
                        data-testid={ `link-to-album-${album.collectionId}` }
                        to={ `album/${album.collectionId}` }
                      >
                        <div className="d-flex justify-content-center pb-3">
                          <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                        </div>
                        <div className="d-flex justify-content-center">
                          <li>{album.collectionName}</li>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )
            : <span>{searchAnswer}</span>}
        </div>
      </div>
    );
  }
}

export default Search;
