import { useState, useEffect } from 'react';
import {
  RetryButton,
  NextLevelLink,
  ResultsPrimaryControls,
  ResultsSecondaryControls,
  StyledResults,
  Header,
  Result,
} from './styled';
import HomeButton from '../Icons/HomeIcon';
import LevelButton from '../Icons/LevelButton';
import RulesButton from '../Icons/RulesButton';
import Rules from '../Rules';
import { IoArrowForwardCircleSharp as NextIcon } from 'react-icons/io5';
import { IoMdRefreshCircle as RefreshIcon } from 'react-icons/io';
import {
  useNextLevel,
  useCountError,
  maxError,
  resultMessage,
} from './helpers';

const Results = ({ playerCounts, actualScores }) => {
  const [rulesShown, setRulesShown] = useState(false);
  const nextLevel = useNextLevel();
  const countError = useCountError({ playerCounts, actualScores });

  return (
    <StyledResults>
      {rulesShown && <Rules setShown={setRulesShown} />}
      <Header>Results</Header>

      <Result>{resultMessage(countError)}</Result>

      <ResultsPrimaryControls>
        <RetryButton
          title="Retry"
          onClick={() => {
            window.location.reload();
          }}
        >
          <RefreshIcon />
        </RetryButton>
        {nextLevel && countError <= maxError && (
          <NextLevelLink
            to={`/levels/${nextLevel.difficulty}/${nextLevel.stage}`}
            title="Next Level"
          >
            <NextIcon />
          </NextLevelLink>
        )}
      </ResultsPrimaryControls>

      <ResultsSecondaryControls>
        <HomeButton />
        <LevelButton />
        <RulesButton setShown={setRulesShown} />
      </ResultsSecondaryControls>
    </StyledResults>
  );
};

export default Results;