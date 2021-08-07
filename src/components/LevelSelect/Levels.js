import { useState, useEffect } from 'react';
import { ReactComponent as BlueComplete } from '../../icons/BlueComplete.svg';
import { ReactComponent as RedComplete } from '../../icons/RedComplete.svg';
import { ReactComponent as BlueRedComplete } from '../../icons/BlueRedComplete.svg';
import { ReactComponent as Incomplete } from '../../icons/Incomplete.svg';
import { LevelContainer, Card, LevelTitle, CardLink } from './styled';

function Levels(props) {
  //setData will be used when we have local storage setup.
  const [data] = useState({
    beginner: {
      1: 'Incomplete',
      2: 'Incomplete',
      3: 'Incomplete',
      4: 'Incomplete',
      5: 'Incomplete',
      6: 'Incomplete',
      7: 'Incomplete',
      8: 'Incomplete',
      9: 'Incomplete',
      10: 'Incomplete',
    },
    average: {
      1: 'Incomplete',
      2: 'Incomplete',
      3: 'Incomplete',
      4: 'Incomplete',
      5: 'Incomplete',
      6: 'Incomplete',
      7: 'Incomplete',
      8: 'Incomplete',
      9: 'Incomplete',
      10: 'Incomplete',
    },
    hard: {
      1: 'Incomplete',
      2: 'Incomplete',
      3: 'Incomplete',
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
    switch (status) {
      case 'Incomplete':
        return <Incomplete />;
      case 'BlueComplete':
        return <BlueComplete />;
      case 'RedComplete':
        return <RedComplete />;
      case 'BlueRedComplete':
        return <BlueRedComplete />;
      default:
        break;
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
            <CardLink to={`/levels/${props.selection}/${level}`} />
            <LevelTitle>{`Level ${level}`}</LevelTitle>
            {renderStatus(status)}
          </Card>
        );
      })}
    </LevelContainer>
  );
}

export default Levels;
