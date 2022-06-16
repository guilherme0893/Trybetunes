/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import {
  Button, Typography, Input, InputLabel, Grid, Paper, Link } from '@mui/material';

import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LoginIcon from '@mui/icons-material/Login';
import GlobalContext from '../context/GlobalContext';

function Login() {
  const history = useHistory();

  const {
    setLogin,
    isButtonDisabled,
    setIsButtonDisabled,
  } = useContext(GlobalContext);

  const handleLoginInput = ({ target }) => {
    const inputControl = 3;
    if (target.value.length > inputControl) {
      setLogin(target.value);
      setIsButtonDisabled(false);
    }
  };

  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 370,
    margin: '20px auto',
  };

  const buttonStyle = {
    marginTop: '15px',
    marginBottom: '30px',
  };

  const contentGridStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '80px',
  };

  const titleGridStyle = {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconStyle = {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 120,
  };

  return (
    <Grid>
      <Paper
        elevation={ 20 }
        style={ paperStyle }
      >
        <Grid style={ titleGridStyle }>
          <Typography variant="h2" component="h2">
            TrybeTunes
          </Typography>
        </Grid>
        <AudiotrackIcon
          style={ iconStyle }
        />
        <Grid style={ contentGridStyle }>
          <InputLabel
            htmlFor="login-name-input"
          >
            <Input
              fullWidth
              required
              data-testid="login-name-input"
              type="text"
              placeholder="user@email.com"
              onChange={ handleLoginInput }
            />
          </InputLabel>
          <InputLabel
            style={ { marginTop: '15px' } }
            htmlFor="login-password-input"
          >
            <Input
              fullWidth
              required
              data-testid="login-password-input"
              type="password"
              placeholder="*****"
              onChange={ handleLoginInput }
            />
          </InputLabel>
          <Button
            style={ buttonStyle }
            variant="contained"
            startIcon={ <LoginIcon /> }
            type="submit"
            data-testid="login-submit-button"
            onClick={ () => history.push('/search') }
            disabled={ isButtonDisabled }
          >
            Entrar
          </Button>
          <Typography style={ { } }>
            <Link>
              Forgot password ?
            </Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;
