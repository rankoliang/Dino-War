import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Level from './components/Level';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/levels/:difficulty/:stage">
          <Level />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
