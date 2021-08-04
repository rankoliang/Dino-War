import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { levels } from '../data/levels';
import { legends } from '../data/legends';
import { dinos } from '../data/dinos';
import { randBetween, usePrevious } from '../../helpers';
import shuffle from 'shuffle-array';

export const dinoTransform = ({ translateX, translateY, scale }) => {
  return `translate(${translateX}%, ${translateY}%) scale(${scale}%)`;
};

export const makeUpdateDino = (setDinos) => (i, callback) => {
  setDinos((dinos) => {
    const dino = dinos[i];

    const result = [
      ...dinos.slice(0, i),
      { ...dino, ...callback(dino) },
      ...dinos.slice(i + 1),
    ];

    return result;
  });
};

// Returns a promise that counts and animates all of the dinos
const countDinos = (
  iterationInterval,
  scale,
  [teamDinos, setTeamDinos, setActualCount]
) => {
  return new Promise((resolve, reject) => {
    const updateDino = makeUpdateDino(setTeamDinos);

    let i = 0;

    const interval = setInterval(() => {
      if (i < teamDinos.length) {
        try {
          updateDino(i, (dino) => {
            return {
              translateY: dino.translateY - 50,
              animating: true,
              scale,
            };
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

export const useAnimateAndCountDinos = (
  { iterationInterval, scale = 120 },
  ...dinosArgs
) => {
  const [phase, setPhase] = useState('main');

  const prevPhase = usePrevious(phase);

  const handleTransitionEnd = () => {
    setPhase('counting');
  };

  useEffect(() => {
    if (phase === 'transitioning' && prevPhase !== phase) {
      dinosArgs
        .reduce((task, dinoArgs) => {
          return task.then(() => {
            return countDinos(iterationInterval, scale, dinoArgs);
          });
        }, Promise.resolve())
        .then(() => {
          setPhase('results');
        });
    }
  }, [iterationInterval, dinosArgs, scale, phase, prevPhase]);

  const triggerCount = () => {
    if (phase === 'main') {
      setPhase('transitioning');
    }
  };

  return {
    phase,
    triggerCount,
    handleTransitionEnd,
  };
};

export const useLevel = () => {
  const { difficulty, stage } = useParams();
  return levels[difficulty][stage];
};

export const useLegend = (level) => {
  const redLegendId = level.legends.red;
  const blueLegendId = level.legends.blue;

  return {
    red: legends[redLegendId],
    blue: legends[blueLegendId],
  };
};

export const useDinoIds = (level) => {
  const legend = useLegend(level);

  return {
    red: Object.keys(legend.red),
    blue: Object.keys(legend.blue),
  };
};

const getDinoWithStyle = (dinoId, points) => {
  const dino = dinos[dinoId];

  return {
    Component: dino.Component,
    scaleX: dino.skull ? 1 : -1,
    translateX: randBetween(-25, 25),
    translateY: randBetween(-50, 50),
    scale: 100,
    points,
  };
};

export const useRandomDinos = (level, team) => {
  const dinoIds = useDinoIds(level)[team];
  const legend = useLegend(level)[team];

  return useState(() => {
    const { low, high } = level.range;

    const dinoArray = dinoIds.reduce((arr, id) => {
      const dinoCount = randBetween(low, high);
      for (let i = 0; i < dinoCount; i++) {
        const points = legend[id];

        arr.push(getDinoWithStyle(id, points));
      }
      return arr;
    }, []);

    shuffle(dinoArray);

    return dinoArray;
  });
};

export const useWinner = (phase, scores) => {
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (phase === 'results') {
      if (scores.red > scores.blue) {
        setWinner('Red Team');
      } else if (scores.blue > scores.red) {
        setWinner('Blue Team');
      }
    }
  }, [phase, scores.red, scores.blue]);

  return winner;
};
