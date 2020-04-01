import React from 'react';

import { ApplyProvider } from './HigherOrder';
import Routes from './routes';
import { Header } from './Components';

const App = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default ApplyProvider(App);
