import React from 'react';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import LightIcon from '@material-ui/icons/Brightness4';
import DarkIcon from '@material-ui/icons/Brightness7';
import PropTypes from 'prop-types';

function ButtonAppBar({ onToggleTheme, isDarkTheme }) {
  const classes = useStyles();

  function renderThemeToggler() {
    return (
      <Tooltip arrow title="Alternar tema claro/escuro">
        <IconButton aria-label="toggle dark theme" onClick={onToggleTheme}>
          {isDarkTheme ? <DarkIcon /> : <LightIcon className={classes.button} />}
        </IconButton>
      </Tooltip>
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
          {renderThemeToggler()}
          <Button color="inherit">Login</Button>
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
