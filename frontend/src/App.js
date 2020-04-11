import React, { useState } from 'react';
import { ApplyProvider } from './HigherOrder';
import Routes from './routes';
import { Header } from './Components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => {
  const [theme, setTheme] = useState({
    palette: {
      type: 'light',
    },
  });

  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';

    setTheme({
      palette: {
        type: newPaletteType,
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
