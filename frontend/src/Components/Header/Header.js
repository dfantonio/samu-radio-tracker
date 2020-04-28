import React from 'react';
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

function ButtonAppBar({ onToggleTheme, isDarkTheme }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sessionToken, nome } = useSelector(state => state.session);
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
    return isLogged ? (
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
    ) : (
      <></>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {renderUserData()}
          {renderThemeToggler()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  isDarkTheme: PropTypes.bool,
};

ButtonAppBar.defaultProps = {
  bool: false,
};

export default ButtonAppBar;
