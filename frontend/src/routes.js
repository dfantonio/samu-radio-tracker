import { RegisterStuff, Home, Login } from './Containers';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { history } from './Store/history';
import React from 'react';
import { useSelector } from 'react-redux';
import { Drawer } from './Components';
import PropTypes from 'prop-types';

const Routes = ({ drawerOpen, handleDrawerToggle }) => {
  const DrawerWrapper = children => (
    <div style={{ display: 'flex' }}>
      <Drawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      {children}
    </div>
  );

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={paths.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute exact path={paths.HOME}>
          {DrawerWrapper(<Home />)}
        </PrivateRoute>
        <PrivateRoute exact path={paths.CADASTRO}>
          {DrawerWrapper(<RegisterStuff />)}
        </PrivateRoute>
        <Redirect from="*" exact to={paths.HOME} />
      </Switch>
    </ConnectedRouter>
  );
};

Routes.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool,
};

Routes.defaultProps = {
  drawerOpen: false,
};

function PrivateRoute(props) {
  const { sessionToken } = useSelector(state => state.session);

  return sessionToken ? <Route {...props} /> : <Redirect to={paths.LOGIN} />;
}

export const paths = {
  LOGIN: '/login',
  HOME: '/',
  CADASTRO: '/cadastro',
  NOVO_USUARIO: '/newuser',
};

export default Routes;
