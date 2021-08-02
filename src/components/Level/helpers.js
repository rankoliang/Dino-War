import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { levels } from '../data/levels';
import { legends } from '../data/legends';
import { dinos } from '../data/dinos';
import { randBetween, usePrevious } from '../../helpers';
import shuffle from 'shuffle-array';

export const dinoStyle = ({ scaleX, translateX, translateY, scale }) => {
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

export const useAnimateAndCountDinos = (
  iterationInterval,
  scale = 120,
  ...dinosArgs
) => {
  const [counting, setCounting] = useState(false);
  const [transitioning, setTransitioning] = useState(null);

  const prevCounting = usePrevious(counting);

  const handleTransitionEnd = () => {
    setCounting(true);
    setTransitioning(false);
  };

  useEffect(() => {
    if (counting && prevCounting !== counting) {
      dinosArgs.reduce((task, dinoArgs) => {
        return task.then(() => {
          return countDinos(iterationInterval, scale, dinoArgs);
        });
      }, Promise.resolve());
    }
  }, [iterationInterval, prevCounting, dinosArgs, scale, counting]);

  const triggerCount = () => {
    if (!counting && !transitioning) {
      // transition to counting state
      setTransitioning(true);
    }
  };

  return {
    counting,
    transitioning,
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
