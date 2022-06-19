/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import AlbumCard from './AlbumCard';
import GlobalContext from '../context/GlobalContext';

function AlbumResult() {
  const {
    album,
    artistName,
    spinner,
  } = useContext(GlobalContext);

  return (
    <Box
      style={ {
        marginTop: '100px',
      } }
    >
      {
        spinner === true ? (
          <Box sx={ { display: 'flex' } }>
            <LinearProgress />
          </Box>) : (
          album.length === 0 || !album ? (
            <h3 style={ { textAlign: 'center' } }>No album found</h3>
          ) : (
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
          )
        )
      }
    </Box>
  );
}

export default AlbumResult;
