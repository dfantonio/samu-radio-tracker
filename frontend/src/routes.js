import { RegisterStuff, Home, Login } from './Containers';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { history } from './Store/history';
import React from 'react';
import { useSelector } from 'react-redux';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={paths.LOGIN} component={Login} />
      <PrivateRoute exact path={paths.HOME} component={Home} />
      <PrivateRoute exact path={paths.CADASTRO} component={RegisterStuff} />
    </Switch>
  </ConnectedRouter>
);

function PrivateRoute(props) {
  const { sessionToken } = useSelector(state => state.session);

  return sessionToken ? <Route {...props} /> : <Redirect to={paths.LOGIN} />;
}

export const paths = {
  LOGIN: '/login',
  HOME: '/',
  CADASTRO: '/cadastro',
};

export default Routes;
