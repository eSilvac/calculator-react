import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from '../../views/Calculator/Calculator';

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
