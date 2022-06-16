import React, { Component } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import FavoriteComponent from '../components/FavoriteComponent';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <ProfileHeader />
        <FavoriteComponent />
      </div>
    );
  }
}

export default Profile;
