import { RegisterStuff, Home, Login } from './Containers';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from './Store/history';
import React from 'react';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro" component={RegisterStuff} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
