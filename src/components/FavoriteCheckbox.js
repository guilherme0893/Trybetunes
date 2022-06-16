import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import GlobalContext from '../context/GlobalContext';

function FavoriteCheckbox(props) {
  const { trackId, id } = props;

  const {
    setFavorite,
    sendToLocalStorage,
    setSendToLocalStorage,
  } = useContext(GlobalContext);

  const removeFromLocalStorage = (songId) => {
    const musics = JSON.parse(localStorage.getItem('favoriteSongs'));
    const filteredMusics = [...new Map(musics
      .map((music) => [JSON.stringify(music), music])).values()];
    const removedMusic = filteredMusics.filter((music) => music === songId);
    return removedMusic;
  };

  const handleOnCheckBoxClick = ({ target }) => {
    const { checked, value } = target;
    if (checked === true) {
      // addSong(trackId);
      setFavorite(true);
      setSendToLocalStorage([...sendToLocalStorage, value]);
    }
    if (checked === false) {
      setFavorite(false);
      removeFromLocalStorage(value);
    }
  };

  return (
    <Box>
      <InputLabel htmlFor="trackId" sx={ { ml: 2 } }>
        Favorite
        <Checkbox
          value={ id }
          type="checkbox"
          data-testid={ `checkbox-music-${trackId}` }
          onChange={ handleOnCheckBoxClick }
        />
      </InputLabel>
    </Box>
  );
}

FavoriteCheckbox.propTypes = {
  trackId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default FavoriteCheckbox;
