/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import AlbumCard from './AlbumCard';
import GlobalContext from '../context/GlobalContext';

function Album() {
  const {
    album,
    searched,
    artistName,
  } = useContext(GlobalContext);

  // console.log(album);

  return (
    <Box
      style={ {
        marginTop: '100px',
      } }
    >
      {
        !searched
          // eslint-disable-next-line operator-linebreak
          ?
          (
            <>
            </>
          )
          // eslint-disable-next-line operator-linebreak
          :
          (
            album.length !== 0 ? (
              <Box>
                <header
                  style={ { textAlign: 'center' } }
                >
                  <h3 sx={ { } }>
                    Results for
                    {' '}
                    {artistName}
                  </h3>
                </header>
                <Box
                  sx={ {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  } }
                >
                  {album.map((a) => (
                    <AlbumCard
                      key={ a.collectionId }
                      albumCover={ a.artworkUrl100 }
                      albumName={ a.collectionName }
                      albumId={ a.collectionId }
                      artistName={ a.artistName }
                    />
                  ))}
                </Box>
              </Box>
            ) : (
              <h3 style={ { textAlign: 'center' } }>No album found</h3>
            )
          )
      }
    </Box>
  );
}

export default Album;
