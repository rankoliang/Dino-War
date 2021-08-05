import { useState, useEffect } from 'react';
import { RetryIcon, NextLevelIcon, Result } from './styled';
import HomeButton from '../Icons/HomeIcon';
import LevelButton from '../Icons/LevelButton';
import RulesButton from '../Icons/RulesButton';
import Rules from '../Rules';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { IoMdRefreshCircle } from 'react-icons/io';

const Results = (props) => {
  const { currentLevel, setShown } = props;
  const [difficulty, setDifficulty] = useState();
  const [stage, setStage] = useState();
  const [userResults, setUserResults] = useState('Placeholder');
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
    <>
      {rulesShown && <Rules setShown={setRulesShown} />}
      <Result>
        <h1>Results!</h1>

        <div id="resultScore">{userResults}</div>

        <div className="resultsTop">
          <RetryIcon
            title="Retry"
            onClick={() => {
              window.location.reload();
            }}
          >
            <IoMdRefreshCircle />
          </RetryIcon>
          <NextLevelIcon
            href={'#/levels/' + difficulty + '/' + stage}
            title="Next Level"
          >
            <IoArrowForwardCircleSharp
              onClick={() => {
                setShown(false);
              }}
            />
          </NextLevelIcon>
        </div>

        <div className="resultsBtm">
          <HomeButton />
          <LevelButton />
          <RulesButton setShown={setRulesShown} />
        </div>
      </Result>
    </>
  );
};

export default Results;

