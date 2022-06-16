/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import AlbumResult from './AlbumResult';
import GlobalContext from '../context/GlobalContext';

function Album() {
  const {
    searched,
  } = useContext(GlobalContext);

  return (
    <Box
      style={ {
        marginTop: '100px',
      } }
    >
      {
        !searched ? (
          <>
          </>
        )
          : (
            <AlbumResult />
          )
      }
    </Box>
  );
}

export default Album;
