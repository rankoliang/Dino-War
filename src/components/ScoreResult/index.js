import { useEffect, useState } from 'react';
import {
  StyledScoreResult,
  ScoreResultGroup,
  ScoreResultGroupHeader,
  Score,
} from './styled';
import { usePrevious } from '../../globalHelpers';

const ScoreResult = ({
  phase,
  score,
  actualScore,
  color,
  reversed,
  iterationInterval,
}) => {
  const [transitioning, setTransitioning] = useState(false);
  const previousActualScore = usePrevious(actualScore);

  useEffect(() => {
    if (
      !transitioning &&
      previousActualScore !== null &&
      previousActualScore !== actualScore
    ) {
      setTransitioning(true);
    }
  }, [transitioning, actualScore, previousActualScore]);

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <StyledScoreResult
      correct={phase === 'results' && actualScore === score}
      reversed={reversed}
    >
      <ScoreResultGroup>
        <ScoreResultGroupHeader>Your Count</ScoreResultGroupHeader>
        <Score>{score}</Score>
      </ScoreResultGroup>
      <ScoreResultGroup color={color}>
        <ScoreResultGroupHeader>Actual Count</ScoreResultGroupHeader>
        <Score
          transitioning={transitioning}
          onTransitionEnd={handleTransitionEnd}
          iterationInterval={iterationInterval}
        >
          {actualScore}
        </Score>
      </ScoreResultGroup>
    </StyledScoreResult>
  );
};

export default ScoreResult;
