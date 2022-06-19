import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import GlobalContext from '../context/GlobalContext';

function AlbumCard(props) {
  const { albumId, albumCover, albumName } = props;

  return (
    <Card
      sx={ {
        maxWidth: 245,
        m: 2,
        boxShadow: 3,
      } }
    >
      <Link
        to={ `album/${albumId}` }
        data-testid={ `link-to-album-${albumId}` }
      >
        <CardMedia
          component="img"
          height="250"
          image={ albumCover }
          alt={ albumName }
        />
        <CardContent>
          <Typography>{ albumName }</Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default AlbumCard;

AlbumCard.propTypes = {
  albumId: PropTypes.number.isRequired,
  albumCover: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  // artistName: PropTypes.string.isRequired,
};
