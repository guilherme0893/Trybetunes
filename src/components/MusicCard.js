/* eslint-disable react/jsx-max-depth */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import {
  addSong,
  // getFavoriteSongs,
} from '../services/favoriteSongsAPI';
import GlobalContext from '../context/GlobalContext';

function MusicCard(props) {
  const { trackName, previewUrl, trackId } = props;
  const {
    setFavorite,
  } = useContext(GlobalContext);

  const handleOnCheckBoxClick = () => {
    addSong(trackId);
    setFavorite(true);
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
      <Card
        sx={ {
          maxWidth: 450,
          maxHeight: 150,
          m: 2,
          boxShadow: 2,
          display: 'column',
          flexWrap: 'wrap',
          alignContent: 'center',
        } }
      >
        <CardContent sx={ { p: 2 } }>
          <Typography sx={ { mb: 2, fontWeight: 'bold' } }>
            { trackName }
          </Typography>
          <Box sx={ { display: 'flex' } }>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
            <InputLabel htmlFor="trackId" sx={ { ml: 2 } }>
              Favorite
              <Checkbox
                id={ trackId }
                type="checkbox"
                data-testid={ `checkbox-music-${trackId}` }
                // checked={ setFavorite }
                onChange={ handleOnCheckBoxClick }
              />
            </InputLabel>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
};

export default MusicCard;
