import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

export default function Battery({ onChange, status, payload, errors }) {
  const { serialNumber } = errors;

  return (
    <>
      <TextField
        fullWidth
        name="serialNumber"
        id="serialNumber"
        label="Nº de série"
        variant="outlined"
        onChange={onChange}
        inputProps={{ maxLength: 7 }}
        error={!!serialNumber}
        helperText={serialNumber}
      />
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="status"
          label="Status"
          value={payload.status || 3}
          onChange={onChange}
        >
          {status.map(({ id_status, status }) => (
            <MenuItem key={id_status} value={id_status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

Battery.propTypes = {
  onChange: PropTypes.func.isRequired,
  status: PropTypes.array,
  payload: PropTypes.object,
  errors: PropTypes.object,
};

Battery.defaultProps = {
  status: [],
  payload: {},
  errors: {},
};
