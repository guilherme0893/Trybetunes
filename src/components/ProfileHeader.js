import React from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar, AppBar } from '@mui/material/';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ProfileHeader() {
  const history = useHistory();
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
        <AudiotrackIcon style={ { fontSize: 60 } } />
        <h1>Profile</h1>
        <IconButton
          style={ {
            fontSize: 60,
            backgroundColor: 'white',
          } }
          onClick={ onBackButtonClick }
        >
          <ArrowBackIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ProfileHeader;
