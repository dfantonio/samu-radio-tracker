import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function Radio({ onChange, status, payload, errors }) {
  const { serialNumber, issi, patrimonio } = errors;

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
      <TextField
        fullWidth
        name="issi"
        id="issi"
        label="ISSI"
        variant="outlined"
        onChange={onChange}
        inputProps={{ maxLength: 7 }}
        error={!!issi}
        helperText={issi}
      />
      <TextField
        fullWidth
        name="patrimonio"
        id="patrimonio"
        label="Código Patrimônio"
        variant="outlined"
        onChange={onChange}
        inputProps={{ maxLength: 6 }}
        error={!!patrimonio}
        helperText={patrimonio}
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
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={onChange} name="antena" color="primary" />}
          label="Antena"
        />
      </FormGroup>
    </>
  );
}

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  status: PropTypes.array,
  payload: PropTypes.object,
  errors: PropTypes.object,
};

Radio.defaultProps = {
  status: [],
  payload: {},
  errors: {},
};
