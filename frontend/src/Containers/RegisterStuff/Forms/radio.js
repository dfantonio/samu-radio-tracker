import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';

export default function Radio({ onChange }) {
  return (
    <>
      <TextField
        name="serialNumber"
        id="serialNumber"
        label="Nº de série"
        variant="outlined"
        onChange={onChange}
      />
      <TextField
        name="issi"
        id="issi"
        label="ISSI"
        variant="outlined"
        onChange={onChange}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox onChange={onChange} name="antena" color="primary" />
          }
          label="Antena"
        />
      </FormGroup>
    </>
  );
}

Radio.propTypes = {
  onChange: PropTypes.func.isRequired
};
