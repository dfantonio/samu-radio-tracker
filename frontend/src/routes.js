import { Grid, Home } from "./Containers";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "./Store/history";
import React from "react";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Grid>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Grid>
  </ConnectedRouter>
);

export default Routes;
