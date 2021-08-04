import { useReducer, useState } from 'react';
import { usePattern } from '../../helpers';
import {
  useLevel,
  useAnimateAndCountDinos,
  useRandomDinos,
  useLegend,
} from './helpers';
import { TeamNames, TeamName, MainActionButton, StyledLevel } from './styled';
import Counters from './components/Counters';
import Battlefield from './components/Battlefield';
import counterReducer from '../Counter/reducer';
import './Level.css';

const Level = () => {
  const level = useLevel();
  const legends = useLegend(level);

  const redCountStore = useReducer(counterReducer, 0);
  const blueCountStore = useReducer(counterReducer, 0);

  const pattern = usePattern();

  const [redDinos, setRedDinos] = useRandomDinos(level, 'red');
  const [blueDinos, setBlueDinos] = useRandomDinos(level, 'blue');

  const [actualRedCount, setActualRedCount] = useState(0);
  const [actualBlueCount, setActualBlueCount] = useState(0);

  const { counting, transitioning, handleTransitionEnd, triggerCount } =
    useAnimateAndCountDinos(
      {
        iterationInterval: 225,
        scale: 140,
      },
      [redDinos, setRedDinos, setActualRedCount],
      [blueDinos, setBlueDinos, setActualBlueCount]
    );

  return (
    <StyledLevel background={pattern}>
      <TeamNames>
        <TeamName background="var(--red)">Red Team</TeamName>
        <TeamName background="var(--blue)">Blue Team</TeamName>
      </TeamNames>
      <Counters
        onTransitionEnd={handleTransitionEnd}
        transitioning={transitioning}
        counting={counting}
        countStores={{
          red: redCountStore,
          blue: blueCountStore,
        }}
        actualScores={{
          red: actualRedCount,
          blue: actualBlueCount,
        }}
      />
      <Battlefield
        legends={legends}
        dinos={{ red: redDinos, blue: blueDinos }}
        setDinos={{ red: setRedDinos, blue: setBlueDinos }}
      />
      <MainActionButton
        onClick={triggerCount}
        transitioning={transitioning}
        counting={counting}
      >
        {counting ? 'Counting...' : 'Click here to battle!'}
      </MainActionButton>
    </StyledLevel>
  );
};

export default Level;
