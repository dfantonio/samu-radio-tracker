import React, { useState } from 'react';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import LightIcon from '@material-ui/icons/Brightness4';
import DarkIcon from '@material-ui/icons/Brightness7';
import PropTypes from 'prop-types';
import Logout from '@material-ui/icons/ExitToApp';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as sessionCreators } from '../../Store/Ducks/session';
import Hidden from '@material-ui/core/Hidden';

function ButtonAppBar({ onToggleTheme, isDarkTheme, handleDrawerToggle }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sessionToken, nome } = useSelector(state => state.session);
  const { pathname } = useSelector(state => state.router.location);
  const isLogged = !!sessionToken;

  function renderThemeToggler() {
    return (
      <Tooltip arrow title="Alternar tema claro/escuro">
        <IconButton aria-label="toggle dark theme" onClick={onToggleTheme}>
          {isDarkTheme ? <DarkIcon /> : <LightIcon className={classes.button} />}
        </IconButton>
      </Tooltip>
    );
  }

  function renderUserData() {
    return (
      isLogged && (
        <>
          <Typography variant="h6">Bem vindo {nome}</Typography>
          <Tooltip arrow title="Fazer Logout">
            <IconButton
              aria-label="logout"
              onClick={() => dispatch(sessionCreators.clearSession())}
            >
              <Logout className={classes.button} />
            </IconButton>
          </Tooltip>
        </>
      )
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden mdUp xsUp={pathname === '/login'}>
            <IconButton
              color="inherit"
              aria-label="Abre o drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" className={classes.title} />
          {renderUserData()}
          {renderThemeToggler()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  isDarkTheme: PropTypes.bool,
};

ButtonAppBar.defaultProps = {
  isDarkTheme: false,
};

export default ButtonAppBar;
