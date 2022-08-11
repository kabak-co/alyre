import { string } from 'prop-types';
import React, { PropTypes } from 'react';

const Profile = props => {
  return (
    <div>
      Profil
    </div>
  );
};

Profile.propTypes = {
  profileImage: string,
  username: string,
};

export default Profile;