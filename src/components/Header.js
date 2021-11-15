import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: false,
    };
  }

  // ao carregar o componenet no state 'zero'
  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    // o getUser original vem de API, logo é um async
    getUser()
    // lembrar que retorna um objeto
      .then((name) => this.setState({
        userName: name.name,
        loading: true,
      }));
  }

  render() {
    const {
      userName,
      loading,
    } = this.state;
    return (
      <header data-testid="header-component">
        { loading
          ? <h1 data-testid="header-user-name">{`Welcome, ${userName}!`}</h1>
          : <Loading />}
        <Link to="/search" data-testid="link-to-search" />
        <Link to="/favorites" data-testid="link-to-favorites" />
        <Link to="/profile" data-testid="link-to-profile" />
      </header>
    );
  }
}

export default Header;
