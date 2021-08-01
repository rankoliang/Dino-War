import {
  StyledScoreResult,
  ScoreResultGroup,
  ScoreResultGroupHeader,
  Score,
} from './styled';

const ScoreResult = ({ score, actualScore, color, reversed }) => {
  return (
    <StyledScoreResult reversed={reversed}>
      <ScoreResultGroup>
        <ScoreResultGroupHeader>Your Count</ScoreResultGroupHeader>
        <Score>{score}</Score>
      </ScoreResultGroup>
      <ScoreResultGroup color={color}>
        <ScoreResultGroupHeader>Actual Count</ScoreResultGroupHeader>
        <Score>{actualScore}</Score>
      </ScoreResultGroup>
    </StyledScoreResult>
  );
};

export default ScoreResult;
