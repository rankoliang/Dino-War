import { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import trianglify from 'trianglify';
import { ReactComponent as OnePointRedDino } from '../../icons/dinosaurs/red-one-point.svg';
import { ReactComponent as OnePointBlueDino } from '../../icons/dinosaurs/blue-one-point.svg';
import './Level.css';

const randBetween = (low, high) => {
  return Math.floor(low + Math.random() * (high - low));
};

const Level = () => {
  const { difficulty } = useParams();

  const redCountStore = useReducer(counterReducer, 0);
  const blueCountStore = useReducer(counterReducer, 0);
  const [counting, setCounting] = useState(false);
  const [transitioning, setTransitioning] = useState(null);
  const [pattern] = useState(
    trianglify({
      cellSize: 100,
      height: 3840,
      width: 2160,
      xColors: 'YlGn',
      colorFunction: trianglify.colorFunctions.shadows(),
    })
      .toSVGTree()
      .toString()
  );

  const handleTransitionEnd = () => {
    setCounting(true);
    setTransitioning(false);
  };

  const [redDinos] = useState(
    new Array(10).fill(undefined).map(() => {
      return {
        Component: OnePointRedDino,
        style: {
          transform: `
            scaleX(-1)
            translate(
              ${randBetween(-25, 25)}%,
              ${randBetween(-100, 100)}%
            )
          `,
        },
      };
    })
  );

  const [blueDinos] = useState(
    new Array(10).fill(undefined).map(() => {
      return {
        Component: OnePointBlueDino,
        style: {
          transform: `
            scaleX(-1)
            translate(
              ${randBetween(-25, 25)}%,
              ${randBetween(-100, 100)}%
            )`,
        },
      };
    })
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
            <ScoreResult score={redCountStore[0]} color="var(--red)" />
            <ScoreResult
              score={blueCountStore[0]}
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
        <Legend color="var(--red)" />
        <TeamBoard>
          {redDinos.map(({ Component, style }, i) => (
            <Dino as={Component} style={style} key={i} />
          ))}
        </TeamBoard>
        <TeamBoard reversed>
          {blueDinos.map(({ Component, style }, i) => (
            <Dino as={Component} style={style} key={i} />
          ))}
        </TeamBoard>
        <Legend color="var(--blue)" reversed />
      </Battlefield>
      <MainActionButton
        onClick={() => {
          if (!counting && !transitioning) {
            // transition to counting state
            setTransitioning(true);
          }
        }}
        transitioning={transitioning}
        counting={counting}
      >
        {counting ? 'Counting...' : 'Click here to battle!'}
      </MainActionButton>
    </StyledLevel>
  );
};

export default Level;
