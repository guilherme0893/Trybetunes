import React, { Component } from 'react';
import { BottomNavigation } from '@mui/material';

class Footer extends Component {
  render() {
    return (
      <BottomNavigation
        style={ {
          position: 'relative',
          bottom: 0,
          backgroundColor: 'black',
          minHeight: '50px',
        } }
      >
        footer
      </BottomNavigation>
    );
  }
}

export default Footer;
