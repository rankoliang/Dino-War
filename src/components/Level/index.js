import { useReducer, useState } from 'react';
import { usePattern } from '../../helpers';
import {
  useLevel,
  dinoStyle,
  useAnimateAndCountDinos,
  useRandomDinos,
  useLegend,
} from './helpers';
import {
  TeamNames,
  TeamName,
  Counters,
  MainActionButton,
  Battlefield,
  StyledLevel,
  Dino,
  TeamBoard,
} from './styled';
import Legend from '../Legend';
import Counter from '../Counter';
import ScoreResult from '../ScoreResult';
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
      400,
      140,
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
      >
        {counting ? (
          <>
            <ScoreResult
              score={redCountStore[0]}
              actualScore={actualRedCount}
              color="var(--red)"
            />
            <ScoreResult
              score={blueCountStore[0]}
              actualScore={actualBlueCount}
              color="var(--blue)"
              reversed
            />
          </>
        ) : (
          <>
            <Counter store={redCountStore} color="var(--red)" />
            <Counter store={blueCountStore} color="var(--blue)" reversed />
          </>
        )}
      </Counters>
      <Battlefield>
        <Legend color="var(--red)" legend={legends.red} />
        <TeamBoard>
          {redDinos.map(({ Component, ...dino }, i) => (
            <Dino as={Component} style={dinoStyle(dino)} key={i} />
          ))}
        </TeamBoard>
        <TeamBoard reversed>
          {blueDinos.map(({ Component, ...dino }, i) => (
            <Dino as={Component} style={dinoStyle(dino)} key={i} />
          ))}
        </TeamBoard>
        <Legend color="var(--blue)" reversed legend={legends.blue} />
      </Battlefield>
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
