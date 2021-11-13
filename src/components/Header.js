import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

class Header extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }

  // componentDidMount() {
  //   this.getUser();
  // }

  render() {
    return (
      <header data-testid="header-component">
        <h1 data-testid="header-user-name">
          Hello, UserName!
        </h1>
      </header>
    );
  }
}

export default Header;
