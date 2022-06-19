/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import GlobalContext from '../context/GlobalContext';
import MusicCard from './MusicCard';
import MusicHeader from './MusicHeader';

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
  }, []);

  return (
    <Box data-testid="page-album" sx={ { } }>
      <MusicHeader />
      {
        music.length === 0 || artistName === '' || !artistName ? (
          <LinearProgress />
        ) : (
          <>
            <Box
              sx={ { justifyContent: 'center' } }
              style={ {
                marginTop: '100px',
              } }
            >
              {/* <Typography variant="h4" sx={ { mb: 3 } }>
                Results for
                {' '}
              </Typography> */}
            </Box>
            <Box>
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
