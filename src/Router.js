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
        <Route exact path="/levels/beginner/:stage">
          <Level />
        </Route>
        <Route exact path="/levels/average/:stage">
          <Level />
        </Route>
        <Route exact path="/levels/hard/:stage">
          <Level />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
