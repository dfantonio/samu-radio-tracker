import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

const AutocompleteInput = ({ array, onChange, renderLabel, name, placeholder }) => {
  const buildOnChange = (event, value) => {
    const response = { target: { value: value.id, name } };

    onChange(response);
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      options={array}
      // loading
      loadingText="Carregando..."
      onChange={buildOnChange}
      getOptionLabel={renderLabel}
      name="AAA"
      noOptionsText="Sem opções"
      renderInput={params => (
        <TextField
          fullWidth
          {...params}
          name="ABC"
          label={placeholder}
          variant="outlined"
        />
      )}
    />
  );
};

AutocompleteInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  array: PropTypes.array,
  renderLabel: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

AutocompleteInput.defaultProps = {
  array: [],
  renderLabel: () => 'Label',
  placeholder: '',
  name: '',
};

export default AutocompleteInput;
