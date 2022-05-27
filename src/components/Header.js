import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, AppBar } from '@mui/material/';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchComponent from './SearchComponent';

class Header extends Component {
  render() {
    return (
      <AppBar
        sx={ { width: '100%' } }
        style={ {
          backgroundColor: 'black',
          // position: 'relative',
        } }
      >
        <Toolbar
          sx={ {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
          } }
        >
          <AudiotrackIcon style={ { fontSize: 60 } } />
          <SearchComponent />
          <IconButton
            style={ {
              fontSize: 60,
              backgroundColor: 'white',
            } }
          >
            <AccountCircle />
          </IconButton>
          <Menu
            open={ false }
            style={ { backgroundColor: 'white' } }
          >
            <MenuItem>
              <p>Search</p>
              <Link to="/search" data-testid="link-to-search" />
            </MenuItem>
            <MenuItem>
              <p>Favorites</p>
              <Link to="/favorites" data-testid="link-to-favorites" />
            </MenuItem>
            <MenuItem>
              <p>Profile</p>
              <Link to="/profile" data-testid="link-to-profile" />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

// componentDidMount() {
//   this.getUser();
// }

// const {
//   userName,
//   loading,
// } = this.state;

// constructor() {
//   super();
//   this.state = {
//     userName: '',
//     loading: false,
//   };
// }

// getUser = () => {
//   getUser()
//     .then((name) => this.setState({
//       userName: name.name,
//       loading: true,
//     }));
// }

// <Typography
//   variant="h6"
//   component="h1"
//   data-testid="header-component"
// >
//   { loading
//     ? <h1 data-testid="header-user-name">
//       { `Welcome, ${userName}!`}
//     </h1>
//     : <Loading />}
// </Typography>
