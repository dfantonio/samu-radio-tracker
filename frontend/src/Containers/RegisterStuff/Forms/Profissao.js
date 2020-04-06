import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default function Profissao({ onChange, errors }) {
  const { nome } = errors;

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
    </>
  );
}

Profissao.propTypes = {
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

Profissao.defaultProps = {
  errors: {},
};
