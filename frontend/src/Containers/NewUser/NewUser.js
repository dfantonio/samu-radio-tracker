import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitButton } from '../../Components';
import { Creators as sessionCreators } from '../../Store/Ducks/session';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function NewUser() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { errors } = useSelector(state => state.session);
  const {
    login: { start: cadastroLoader },
  } = useSelector(state => state.loading);

  const [payload, setPayload] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(sessionCreators.startCadastro(payload));
  };

  function handleInputChange(event) {
    const { target } = event;
    const value = target.value;
    const name = target.name;

    if (errors[name]) dispatch(sessionCreators.addSessionErrors({ [name]: '' }));
    setPayload({
      ...payload,
      [name]: value,
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro de usuários
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="nome"
            label="Nome"
            id="nome"
            error={!!errors.nome}
            helperText={errors.nome}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="apelido"
            label="Apelido"
            id="apelido"
            error={!!errors.apelido}
            helperText={errors.apelido}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            id="email"
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleInputChange}
          />
          <SubmitButton fullWidth form loading={!!cadastroLoader} onClick={handleSubmit}>
            Cadastrar
          </SubmitButton>
        </form>
      </div>
    </Container>
  );
}
