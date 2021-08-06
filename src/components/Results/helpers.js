import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import levels from '../../data/levels';

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
