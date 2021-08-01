import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Level from './components/Level';
import LevelSelect from './components/LevelSelect';

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
        <Route exact path="/levels">
          <LevelSelect />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
