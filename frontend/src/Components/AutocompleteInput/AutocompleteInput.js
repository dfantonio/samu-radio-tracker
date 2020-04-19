import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const AutocompleteInput = ({
  array,
  onChange,
  renderLabel,
  name,
  placeholder,
  error,
  loading,
}) => {
  const buildOnChange = (event, value) => {
    const { id } = value || {};
    const response = { target: { value: id, name } };

    onChange(response);
  };

  const [key, setKey] = useState(name);
  const classes = useStyles();

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
          loading={loading}
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
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress
                        color="inherit"
                        size={20}
                        className={classes.loader}
                      />
                    ) : (
                      params.InputProps.endAdornment
                    )}
                  </React.Fragment>
                ),
              }}
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
  loading: PropTypes.bool,
};

AutocompleteInput.defaultProps = {
  array: [],
  renderLabel: () => 'Label',
  placeholder: '',
  name: '',
  error: '',
  loading: false,
};

export default AutocompleteInput;
