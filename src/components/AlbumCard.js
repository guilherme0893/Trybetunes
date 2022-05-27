import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@mui/material';
// import Typography from '@mui/material/Typography';
import Album from './Album';
import GlobalContext from '../context/GlobalContext';

function AlbumCard() {
  const {
    album,
    // searchText,
  } = useContext(GlobalContext);

  return (
    <Box
      style={ {
        marginTop: '100px',
      } }
    >
      {album.length !== 0 ? (
        <>
          {/* <header
            style={ { } }
          >
            <h3 sx={ { align: 'center' } }>
              Results for
              {' '}
              {searchText}
            </h3>
          </header> */}
          <Box
            sx={ {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            } }
          >
            {album.map((a) => (
              <Album
                key={ a.collectionId }
                albumCover={ a.artworkUrl100 }
                albumName={ a.collectionName }
                albumId={ a.collectionId }
                artistName={ a.artistName }
              />
            ))}
          </Box>
        </>
      ) : (
        <p style={ { marginTop: '40px' } }>No album found</p>
      )}
    </Box>
  );
}

export default AlbumCard;
