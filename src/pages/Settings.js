import { string } from 'prop-types';
import React, { PropTypes } from 'react';

const Settings = props => {
  return (
    <div>
      Profil
    </div>
  );
};

Settings.propTypes = {
  SettingsImage: string,
  username: string,
};

export default Settings;