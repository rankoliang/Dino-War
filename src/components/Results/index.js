import { useState } from 'react';
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
import { useNextLevel } from './helpers';

const Results = ({ setShown }) => {
  const [rulesShown, setRulesShown] = useState(false);
  const nextLevel = useNextLevel();

  return (
    <StyledResults>
      {rulesShown && <Rules setShown={setRulesShown} />}
      <Header>Results</Header>

      <Result>You win!</Result>

      <ResultsPrimaryControls>
        <RetryButton
          title="Retry"
          onClick={() => {
            window.location.reload();
          }}
        >
          <RefreshIcon />
        </RetryButton>
        {nextLevel && (
          <NextLevelLink
            to={`/levels/${nextLevel.difficulty}/${nextLevel.stage}`}
            title="Next Level"
            onClick={() => {
              setShown(false);
            }}
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
