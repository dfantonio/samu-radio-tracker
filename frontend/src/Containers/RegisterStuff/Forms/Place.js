import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default function Local({ onChange }) {
  return (
    <TextField
      id="place"
      name="place"
      label="Local"
      variant="outlined"
      onChange={onChange}
    />
  );
}

Local.propTypes = {
  onChange: PropTypes.func.isRequired
};
