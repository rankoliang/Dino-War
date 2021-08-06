import { useReducer, useState } from 'react';
import { usePattern } from '../../globalHelpers';
import {
  useLevel,
  useAnimateAndCountDinos,
  useRandomDinos,
  useLegend,
  useWinner,
} from './helpers';
import { Header, TeamName, StyledLevel, Extras } from './styled';
import MainActionButton from './components/MainActionButton';
import Counters from './components/Counters';
import Battlefield from './components/Battlefield';
import counterReducer from '../Counter/reducer';
import RulesButton from '../Icons/RulesButton';
import Rules from '../Rules';
import Results from '../Results';
import HomeLink from '../Icons/HomeIcon';
import LevelButton from '../Icons/LevelButton';
import './Level.css';

const Level = ({ iterationInterval = 350 }) => {
  const level = useLevel();
  const legends = useLegend(level);

  const redCountStore = useReducer(counterReducer, 0);
  const blueCountStore = useReducer(counterReducer, 0);

  const pattern = usePattern();

  const [redDinos, setRedDinos] = useRandomDinos(level, 'red');
  const [blueDinos, setBlueDinos] = useRandomDinos(level, 'blue');

  const [actualRedCount, setActualRedCount] = useState(0);
  const [actualBlueCount, setActualBlueCount] = useState(0);

  const [rulesShown, setRulesShown] = useState(false);

  const { phase, handleTransitionEnd, triggerCount } = useAnimateAndCountDinos(
    {
      iterationInterval,
      scale: 120,
    },
    [redDinos, setRedDinos, setActualRedCount],
    [blueDinos, setBlueDinos, setActualBlueCount]
  );

  const winner = useWinner(phase, {
    red: actualRedCount,
    blue: actualBlueCount,
  });

  return (
    <StyledLevel background={pattern}>
      {rulesShown && <Rules setShown={setRulesShown} />}
      {phase === 'results' && (
        <Results
          setRulesShown={setRulesShown}
          playerCounts={{
            red: redCountStore[0],
            blue: blueCountStore[0],
          }}
          actualScores={{ red: actualRedCount, blue: actualBlueCount }}
        />
      )}
      <Header>
        <TeamName background="var(--red)">Red Team</TeamName>
        <TeamName background="var(--blue)">Blue Team</TeamName>
        <Extras>
          <HomeLink />
          <LevelButton />
          <RulesButton setShown={setRulesShown} />
        </Extras>
      </Header>
      <Counters
        onTransitionEnd={handleTransitionEnd}
        phase={phase}
        countStores={{
          red: redCountStore,
          blue: blueCountStore,
        }}
        actualScores={{
          red: actualRedCount,
          blue: actualBlueCount,
        }}
        iterationInterval={iterationInterval}
      />
      <Battlefield
        legends={legends}
        dinos={{ red: redDinos, blue: blueDinos }}
        setDinos={{ red: setRedDinos, blue: setBlueDinos }}
      />
      <MainActionButton winner={winner} onClick={triggerCount} phase={phase} />
    </StyledLevel>
  );
};

export default Level;
