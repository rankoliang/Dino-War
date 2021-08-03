import { useState } from "react";
import trianglify from 'trianglify';
import Rules from "../Rules/index";
import RulesButton from "../Icons/RulesButton";
import { App, AppHeader, AppLink, AppExtras } from './styled';

const Home = () => {
  const [pattern] = useState(
    trianglify({
      cellSize: 200,
      height: 3840,
      width: 2160,
      xColors: 'YlGn',
      colorFunction: trianglify.colorFunctions.shadows(),
    })
      .toSVGTree()
      .toString()
  );
  const [ rulesShown, setRulesShown ] = useState(false);

  return (
    <App background={pattern}>
      {rulesShown && <Rules setShown={setRulesShown} />}
      <AppHeader>
        <p className="title">
          Dino-War
        </p>
        <AppLink
          to="/levels/beginner/1"
          title="New Game"
        >
          New Game
        </AppLink>
        <AppLink
          to="/levels"
          title="Level Select"
        >
          Level Select
        </AppLink>

        <AppExtras>
          <RulesButton setShown={setRulesShown} />
        </AppExtras>
      </AppHeader>
    </App>
  );
};

export default Home;