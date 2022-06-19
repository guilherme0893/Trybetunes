import React, { Component } from 'react';
import Header from '../components/Header';
import Album from '../components/Album';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Album />
      </>
    );
  }
}

export default Home;
