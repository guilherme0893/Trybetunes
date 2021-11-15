import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      isButtonDisabled: true,
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

  render() {
    const {
      // dava errado porque a função é uma prop, não um state!!!
      // onInputSearch,
      isButtonDisabled,
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
