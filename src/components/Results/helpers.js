import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import levels from '../../data/levels';

export const maxError = 5;

export const getNextLevel = ({ difficulty, stage }) => {
  const level = levels[difficulty][stage];

  if (level.next === null) {
    return null;
  } else if (level.next) {
    return level.next;
  } else {
    return { difficulty, stage: Number(stage) + 1 };
  }
};

export const useNextLevel = () => {
  const { difficulty, stage } = useParams();
  const [nextLevel, setNextLevel] = useState(null);

  useEffect(() => {
    setNextLevel(getNextLevel({ difficulty, stage }));
  }, [difficulty, stage]);

  return nextLevel;
};

export const useCountError = ({ playerCounts, actualScores }) => {
  const [countError, setCountError] = useState(
    errorMagnitude({ playerCounts, actualScores })
  );

  useEffect(() => {
    setCountError(errorMagnitude({ playerCounts, actualScores }));
  }, [playerCounts, actualScores]);

  return countError;
};

export const errorMagnitude = ({ playerCounts, actualScores }) => {
  const redError = Math.abs(actualScores.red - playerCounts.red);
  const blueError = Math.abs(actualScores.blue - playerCounts.blue);

  return redError + blueError;
};

export const resultMessage = (countError) => {
  if (countError === 0) {
    return 'Perfect!';
  } else if (countError <= maxError) {
    return 'Great Job!';
  } else {
    return 'Try again!';
  }
};
