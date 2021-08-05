import { useState, useEffect } from 'react';
import {
  RetryButton,
  NextLevelButton,
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

const Results = (props) => {
  const { currentLevel, setShown } = props;
  const [difficulty, setDifficulty] = useState();
  const [stage, setStage] = useState();
  const [rulesShown, setRulesShown] = useState(false);

  useEffect(() => {
    if (currentLevel[1] !== '10') {
      setDifficulty(currentLevel[0]);
      setStage(Number(currentLevel[1]) + 1);
    } else if (currentLevel[0] === 'beginner') {
      setDifficulty('average');
      setStage('1');
    } else if (currentLevel[0] === 'average') {
      setDifficulty('hard');
      setStage('1');
    } else {
      //end of the game, restarts
      setDifficulty('beginner');
      setStage('1');
    }
  }, [currentLevel]);

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
        <NextLevelButton
          to="/levels/beginner/2"
          title="Next Level"
          onClick={() => {
            setShown(false);
          }}
        >
          <NextIcon />
        </NextLevelButton>
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
