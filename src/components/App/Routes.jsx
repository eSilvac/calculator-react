import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Calculator} path={['/', '/calculator']} />
      </Switch>
    </Router>
  );
};

export default Routes;