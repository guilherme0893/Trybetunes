/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteCheckbox from './FavoriteCheckbox';

function MusicCard(props) {
  const { trackName, previewUrl } = props;

  return (
    <Box>
      <Card
        sx={ {
          maxWidth: 450,
          maxHeight: 180,
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
            <FavoriteCheckbox />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

export default MusicCard;
