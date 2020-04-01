import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default function Battery({ onChange }) {
  return (
    <TextField
      id="serialNumber"
      name="serialNumber"
      label="Nº de série"
      variant="outlined"
      onChange={onChange}
    />
  );
}

Battery.propTypes = {
  onChange: PropTypes.func.isRequired
};
