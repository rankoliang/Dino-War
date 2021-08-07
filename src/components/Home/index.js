import { useState } from 'react';
import trianglify from 'trianglify';
import Rules from '../Rules/index';
import Attributions from '../Attribution';
import RulesButton from '../Icons/RulesButton';
import AttributionButton from '../Icons/AttributionButton';
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
  const [rulesShown, setRulesShown] = useState(false);
  const [attributionShown, setAttributionShown] = useState(false);

  return (
    <App background={pattern}>
      {rulesShown && <Rules setShown={setRulesShown} />}
      {attributionShown && (
        <Attributions setAttributionShown={setAttributionShown} />
      )}
      <AppHeader>
        <p className="title">Dino-War</p>
        <AppLink to="/levels/beginner/1" title="New Game">
          New Game
        </AppLink>
        <AppLink to="/levels" title="Level Select">
          Level Select
        </AppLink>

        <AppExtras>
          <RulesButton setShown={setRulesShown} />
        </AppExtras>
        <AppExtras reversed>
          <AttributionButton setAttributionShown={setAttributionShown} />
        </AppExtras>
      </AppHeader>
    </App>
  );
};

export default Home;
