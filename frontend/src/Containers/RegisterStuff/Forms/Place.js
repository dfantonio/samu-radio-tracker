import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default function Local({ onChange, errors }) {
  const { nome, sigla } = errors;

  return (
    <>
      <TextField
        fullWidth
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        onChange={onChange}
        error={!!nome}
        helperText={nome}
        inputProps={{ maxLength: 20 }}
      />
      <TextField
        fullWidth
        id="sigla"
        name="sigla"
        label="Sigla"
        variant="outlined"
        onChange={onChange}
        error={!!sigla}
        helperText={sigla}
        inputProps={{ maxLength: 5, style: { textTransform: 'uppercase' } }}
      />
    </>
  );
}

Local.propTypes = {
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

Local.defaultProps = {
  errors: {}
};
