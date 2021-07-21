import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
