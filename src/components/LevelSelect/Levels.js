import { useState, useEffect } from 'react';
import { ReactComponent as Badge1 } from '../../icons/badgeCompletion1.svg';
import { ReactComponent as Badge2 } from '../../icons/badgeCompletion2.svg';
import { ReactComponent as Badge3 } from '../../icons/badgeCompletion3.svg';
import { ReactComponent as Incomplete } from '../../icons/badgeNoComplete.svg';
import { LevelContainer, Card, LevelTitle, Link } from './styled';

function Levels(props) {
  //setData will be used when we have local storage setup.
  const [data, setData] = useState({
    beginner: {
      1: 'Badge1',
      2: 'Badge1',
      3: 'Badge1',
      4: 'Incomplete',
      5: 'Incomplete',
      6: 'Incomplete',
      7: 'Incomplete',
      8: 'Incomplete',
      9: 'Incomplete',
      10: 'Incomplete',
    },
    average: {
      1: 'Badge2',
      2: 'Badge2',
      3: 'Badge2',
      4: 'Incomplete',
      5: 'Incomplete',
      6: 'Incomplete',
      7: 'Incomplete',
      8: 'Incomplete',
      9: 'Incomplete',
      10: 'Incomplete',
    },
    hard: {
      1: 'Badge3',
      2: 'Badge3',
      3: 'Badge3',
      4: 'Incomplete',
      5: 'Incomplete',
      6: 'Incomplete',
      7: 'Incomplete',
      8: 'Incomplete',
      9: 'Incomplete',
      10: 'Incomplete',
    },
  });
  const [levels, setLevels] = useState(Object.entries(data[props.selection]));
  const renderStatus = (status) => {
    if (status === 'Incomplete') {
      return <Incomplete />;
    }
    if (status === 'Badge1') {
      return <Badge1 />;
    }
    if (status === 'Badge2') {
      return <Badge2 />;
    }
    if (status === 'Badge3') {
      return <Badge3 />;
    }
  };

  useEffect(() => {
    setLevels(Object.entries(data[props.selection]));
  }, [props.selection, data]);
  return (
    <LevelContainer>
      {levels.map((data, i) => {
        const [level, status] = data;
        return (
          <Card key={i}>
            <Link href={`#/levels/${props.selection}/${level}`} />
            <LevelTitle>{`Level ${level}`}</LevelTitle>
            {renderStatus(status)}
          </Card>
        );
      })}
    </LevelContainer>
  );
}

export default Levels;
