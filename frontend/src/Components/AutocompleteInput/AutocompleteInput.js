import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const AutocompleteInput = ({
  array,
  onChange,
  renderLabel,
  name,
  placeholder,
  error,
}) => {
  const buildOnChange = (event, value) => {
    const { id } = value || {};
    const response = { target: { value: id, name } };

    onChange(response);
  };

  const [key, setKey] = useState(name);

  useEffect(() => {
    setKey(a => a + 1);
  }, [array]);

  return (
    <FormControl error variant="outlined" fullWidth>
      <Paper>
        <Autocomplete
          key={key}
          id={`Autocomplete-${name}`}
          options={array}
          // loading
          loadingText="Carregando..."
          onChange={buildOnChange}
          getOptionLabel={renderLabel}
          noOptionsText="Sem opções"
          renderInput={params => (
            <TextField
              fullWidth
              error={!!error}
              {...params}
              name="ABC"
              label={placeholder}
              variant="outlined"
            />
          )}
        />
      </Paper>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

AutocompleteInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  array: PropTypes.array,
  renderLabel: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
};

AutocompleteInput.defaultProps = {
  array: [],
  renderLabel: () => 'Label',
  placeholder: '',
  name: '',
  error: '',
};

export default AutocompleteInput;
