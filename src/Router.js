import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Level from './components/Level';
import LevelMenu from "./components/LevelMenu";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/levels/:difficulty">
          <Level />
        </Route>
        <Route exact path="/levelmenu">
          <LevelMenu />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
