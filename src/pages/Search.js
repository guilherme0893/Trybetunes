import React, { Component } from 'react';
// import SearchComponent from '../components/SearchComponent';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
// import Footer from '../components/Footer';

class Search extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <SearchComponent /> */}
        <AlbumCard />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Search;
