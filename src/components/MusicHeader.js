import React from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar, AppBar } from '@mui/material/';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

function MusicHeader() {
  const history = useHistory();
  const onProfileButtonClick = () => {
    history.push('/profile');
  };
  const onBackButtonClick = () => {
    history.push('/search');
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
        <ArrowBackIcon
          style={ { fontSize: 60 } }
          onClick={ onBackButtonClick }
        />
        <AudiotrackIcon style={ { fontSize: 60 } } />
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

export default MusicHeader;
