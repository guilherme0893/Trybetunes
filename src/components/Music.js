/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import GlobalContext from '../context/GlobalContext';
import MusicCard from './MusicCard';

function Music() {
  const { id } = useParams();
  const [artistName, setArtistName] = useState('');

  const {
    music,
    setMusic,
  } = useContext(GlobalContext);

  const fetchMusics = () => {
    getMusics(id)
      .then((m) => {
        setMusic(m);
        setArtistName(m[0].artistName);
      });
  };

  useEffect(() => {
    fetchMusics();
  });

  return (
    <Box data-testid="page-album" sx={ { } }>
      {
        music.length === 0 || artistName === '' || !artistName ? (
          <CircularProgress />
        ) : (
          <>
            <Box sx={ { justifyContent: 'center', backgroundColor: '' } }>
              <Typography variant="h2" sx={ { mb: 3 } }>
                Results for
                {' '}
                { artistName }
              </Typography>
            </Box>
            <Box
              sx={ {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
              } }
            >
              {music.map((song, index) => (
                index === 0
                  ? null
                  : (
                    <div key={ song.trackId }>
                      <MusicCard
                        trackName={ song.trackName }
                        previewUrl={ song.previewUrl }
                        trackId={ song.trackId }
                      />
                    </div>)
              ))}
            </Box>
          </>
        )
      }
    </Box>
  );
}

export default Music;
