/* eslint-disable react/jsx-max-depth */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
// import {
//   addSong,
//   // getFavoriteSongs,
// } from '../services/favoriteSongsAPI';
import GlobalContext from '../context/GlobalContext';

function FavoriteCheckbox(props) {
  const { trackId } = props;
  const {
    setFavorite,
  } = useContext(GlobalContext);

  const handleOnCheckBoxClick = ({ target }) => {
    const { checked } = target;
    if (checked === true) {
      // addSong(trackId);
      setFavorite(true);
    }
    if (checked === false) {
      setFavorite(false);
    }
  };

  // const loadFavoritesSongs = () => {
  //   const { trackId } = this.props;
  //   getFavoriteSongs()
  //     .then((favorites) => {
  //       if (favorites.some((favorite) => favorite.trackId === trackId)) {
  //         this.setState({ isCheckBoxChecked: true });
  //       }
  //     });
  // }

  return (
    <Box>
      <InputLabel htmlFor="trackId" sx={ { ml: 2 } }>
        Favorite
        <Checkbox
          trackId={ trackId }
          type="checkbox"
          data-testid={ `checkbox-music-${trackId}` }
          // checked={ }
          onChange={ handleOnCheckBoxClick }
        />
      </InputLabel>
    </Box>
  );
}

FavoriteCheckbox.propTypes = {
  trackId: PropTypes.string.isRequired,
};

export default FavoriteCheckbox;
