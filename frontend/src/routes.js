import { Home, Login } from './Containers';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from './Store/history';
import React from 'react';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
