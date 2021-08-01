import { useReducer, useState, useEffect } from 'react';
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
import { dinos } from '../data/dinos.js';
import { legends } from '../data/legends.js';
import { levels } from '../data/levels.js';
import Legend from '../Legend';
import Counter from '../Counter';
import ScoreResult from '../ScoreResult';
import counterReducer from '../Counter/reducer';
import trianglify from 'trianglify';
import './Level.css';
import shuffle from 'shuffle-array';

const randBetween = (low, high) => {
  return Math.floor(low + Math.random() * (high - low));
};

const dinoStyle = ({ scaleX, translateX, translateY, scale }) => {
  return {
    transform: `scaleX(${scaleX}) translate(${translateX}%, ${translateY}%) scale(${scale}%)`,
  };
};

// Returns a promise that counts and animates all of the dinos
const countDinos = (
  iterationInterval,
  scale,
  [teamDinos, setTeamDinos, setActualCount]
) => {
  return new Promise((resolve, reject) => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < teamDinos.length) {
        try {
          setTeamDinos((dinos) => {
            const currentDino = teamDinos[i];

            const newDinos = [
              ...dinos.slice(0, i),
              {
                ...currentDino,
                translateY: currentDino.translateY - 50,
                scale,
              },
              ...dinos.slice(i + 1),
            ];

            return newDinos;
          });

          setActualCount((count) => count + teamDinos[i].points);

          i++;
        } catch (err) {
          reject(err);
        }
      } else {
        clearInterval(interval);
        resolve();
      }
    }, iterationInterval);
  });
};

const useAnimateDinos = (
  counting,
  iterationInterval,
  scale = 120,
  ...dinosArgs
) => {
  useEffect(() => {
    if (counting) {
      dinosArgs.reduce((task, dinoArgs) => {
        return task.then(() => {
          return countDinos(iterationInterval, scale, dinoArgs);
        });
      }, Promise.resolve());
    }
  }, [counting]);
};

const Level = () => {
  const { difficulty, stage } = useParams();
  const level = levels[difficulty][stage];
  const redLegendId = level.legends.red;
  const blueLegendId = level.legends.blue;
  const redCountStore = useReducer(counterReducer, 0);
  const blueCountStore = useReducer(counterReducer, 0);
  const [counting, setCounting] = useState(false);
  const [transitioning, setTransitioning] = useState(null);
  const [actualRedCount, setActualRedCount] = useState(0);
  const [actualBlueCount, setActualBlueCount] = useState(0);

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

  const getRange = (dinoIds) => {
    const { low, high } = level.range;

    const dinoArray = dinoIds.reduce((dinos, id) => {
      const dinoCount = randBetween(low, high);
      for (let i = 0; i < dinoCount; i++) {
        dinos.push(id);
      }
      return dinos;
    }, []);
    return dinoArray;
  };

  const [redDinos, setRedDinos] = useState(() => {
    const redDinoIds = Object.keys(legends[redLegendId]);
    const dinoArray = getRange(redDinoIds);
    shuffle(dinoArray);
    return dinoArray.map((dinoId) => {
      const dino = dinos[dinoId];

      return {
        Component: dinos[dinoId].Component,
        scaleX: dino.skull ? 1 : -1,
        translateX: randBetween(-25, 25),
        translateY: randBetween(-50, 50),
        scale: 100,
        points: legends[redLegendId][dinoId],
      };
    });
  });

  const [blueDinos, setBlueDinos] = useState(() => {
    const blueDinoIds = Object.keys(legends[blueLegendId]);
    const dinoArray = getRange(blueDinoIds);
    shuffle(dinoArray);
    return dinoArray.map((dinoId) => {
      const dino = dinos[dinoId];

      return {
        Component: dinos[dinoId].Component,
        scaleX: dino.skull ? 1 : -1,
        translateX: randBetween(-25, 25),
        translateY: randBetween(-50, 50),
        scale: 100,
        points: legends[blueLegendId][dinoId],
      };
    });
  });

  useAnimateDinos(
    counting,
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
        <Legend color="var(--red)" legend={legends[redLegendId]} />
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
        <Legend color="var(--blue)" reversed legend={legends[blueLegendId]} />
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
