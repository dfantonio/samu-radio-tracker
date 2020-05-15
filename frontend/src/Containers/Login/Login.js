import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitButton } from '../../Components';
import { Creators as sessionCreators } from '../../Store/Ducks/session';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Antônio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { errors } = useSelector(state => state.session);
  const {
    login: { start: loginLoader },
  } = useSelector(state => state.loading);

  const [payload, setPayload] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(sessionCreators.startLogin(payload));
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="senha"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!!errors.senha}
            helperText={errors.senha}
            onChange={handleInputChange}
          />
          <SubmitButton fullWidth form loading={!!loginLoader} onClick={handleSubmit}>
            Login
          </SubmitButton>
          <Grid container>
            <Grid item xs>
              <Link onClick={() => alert('Feature não implementada')} variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={() => alert('Feature não implementada')} variant="body2">
                Cadastro
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
