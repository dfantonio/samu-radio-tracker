import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

const AutocompleteInput = ({ array, onChange, renderLabel, name, placeholder }) => {
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
