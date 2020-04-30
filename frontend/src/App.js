import React, { useState } from 'react';
import { ApplyProvider } from './HigherOrder';
import Routes from './routes';
import { Header } from './Components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { readDarkTheme, toggleTheme } from './Helpers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function themeColor() {
  return readDarkTheme() ? 'light' : 'dark';
}

const App = () => {
  const [theme, setTheme] = useState({
    palette: {
      type: themeColor(),
    },
  });

  const toggleDarkTheme = () => {
    toggleTheme();
    setTheme({
      palette: {
        type: themeColor(),
      },
    });
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Header
        onToggleTheme={toggleDarkTheme}
        isDarkTheme={theme.palette.type === 'dark'}
      />
      <Routes />
    </MuiThemeProvider>
  );
};

export default ApplyProvider(App);
