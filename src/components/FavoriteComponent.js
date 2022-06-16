/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

function FavoriteComponent() {
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 480,
    marginTop: '120px',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <Grid>
      <Paper
        elevation={ 20 }
        style={ paperStyle }
      >
        <Typography variant="h4" component="h4">Your favorite songs</Typography>
      </Paper>
    </Grid>
  );
}

export default FavoriteComponent;
