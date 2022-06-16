import React from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar, AppBar } from '@mui/material/';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchComponent from './SearchComponent';

function Header() {
  const history = useHistory();
  const onProfileButtonClick = () => {
    history.push('/profile');
  };
  return (
    <AppBar
      sx={ { width: '100%' } }
      style={ {
        backgroundColor: 'black',
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
          onClick={ onProfileButtonClick }
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
