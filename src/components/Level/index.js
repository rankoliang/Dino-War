import { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  TeamNames,
  TeamName,
  Counters,
  MainActionButton,
  Battlefield,
  StyledLevel,
  VerticalDivider,
} from './styled';
import Legend from '../Legend';
import Counter from '../Counter';
import counterReducer from '../Counter/reducer';
import trianglify from 'trianglify';
import './Level.css';

const Level = () => {
  const { difficulty } = useParams();

  const redCountStore = useReducer(counterReducer, 0);
  const blueCountStore = useReducer(counterReducer, 0);
  const [pattern] = useState(
    trianglify({
      cellSize: 100,
      height: 3840,
      width: 2160,
      xColors: 'YlGn',
      colorFunction: trianglify.colorFunctions.shadows(),
    })
      .toSVGTree()
      .toString()
  );

  return (
    <StyledLevel background={pattern}>
      <VerticalDivider />
      <TeamNames>
        <TeamName background="var(--red)">Red Team</TeamName>
        <TeamName background="var(--blue)">Blue Team</TeamName>
      </TeamNames>
      <Counters>
        <Counter store={redCountStore} color="var(--red)" />
        <Counter store={blueCountStore} color="var(--blue)" reversed />
      </Counters>
      <Battlefield>
        <Legend color="var(--red)" />
        <Legend color="var(--blue)" reversed />
      </Battlefield>
      <MainActionButton>Click here to battle!</MainActionButton>
    </StyledLevel>
  );
};

export default Level;
