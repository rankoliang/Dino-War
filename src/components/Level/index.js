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
  Dino,
  TeamBoard,
} from './styled';
import Legend from '../Legend';
import Counter from '../Counter';
import counterReducer from '../Counter/reducer';
import trianglify from 'trianglify';
import { ReactComponent as OnePointRedDino } from '../../icons/dinosaurs/red-one-point.svg';
import { ReactComponent as TwoPointsRedDino } from '../../icons/dinosaurs/red-two-points.svg';
import { ReactComponent as ThreePointsRedDino } from '../../icons/dinosaurs/red-three-points.svg';
import { ReactComponent as FivePointsRedDino } from '../../icons/dinosaurs/red-five-points.svg';
import { ReactComponent as TenPointsRedDino } from '../../icons/dinosaurs/red-ten-points.svg';

import { ReactComponent as OnePointBlueDino } from '../../icons/dinosaurs/blue-one-point.svg';
import { ReactComponent as TwoPointsBlueDino } from '../../icons/dinosaurs/blue-two-points.svg';
import { ReactComponent as ThreePointsBlueDino } from '../../icons/dinosaurs/blue-three-points.svg';
import { ReactComponent as FivePointsBlueDino } from '../../icons/dinosaurs/blue-five-points.svg';
import { ReactComponent as TenPointsBlueDino } from '../../icons/dinosaurs/blue-ten-points.svg';
import './Level.css';

const level1 = {
  pointGoal: 10,
  teamRed: {
    answer: 8,
    onField: [
    {dino:OnePointRedDino, qty:1, value:1},
    {dino:TwoPointsRedDino, qty:1, value:2},
    {dino:FivePointsRedDino, qty:1, value:5}
    ]
  },
  teamBlue: {
    answer: 18,
    onField: [
      {dino:ThreePointsBlueDino, qty:1, value:3},
      {dino:FivePointsBlueDino, qty:1, value:5},
      {dino:TenPointsBlueDino, qty:1, value:10}
    ]
  }
}

const randBetween = (low, high) => {
  return Math.floor(low + Math.random() * (high - low));
};

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

  const [redDinos] = useState(
    new Array(10).fill(undefined).map(() => {
      return {
        Component: OnePointRedDino,
        style: {
          transform: `
            scaleX(-1)
            translate(
              ${randBetween(-25, 25)}%,
              ${randBetween(-100, 100)}%
            )`,
        },
      };
    })
  );

  const [blueDinos] = useState(
    new Array(10).fill(undefined).map(() => {
      return {
        Component: OnePointBlueDino,
        style: {
          transform: `
            scaleX(-1)
            translate(
              ${randBetween(-25, 25)}%,
              ${randBetween(-100, 100)}%
            )`,
        },
      };
    })
  );
  console.log(difficulty)
if (difficulty === ':level1') {
  console.log('true')
}
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
        <Legend color="var(--red)" levelInfo={level1.teamRed} />
        <TeamBoard>
          {redDinos.map(({ Component, style }, i) => (
            <Dino as={Component} style={style} key={i} />
          ))}
        </TeamBoard>
        <TeamBoard reversed>
          {blueDinos.map(({ Component, style }, i) => (
            <Dino as={Component} style={style} key={i} />
          ))}
        </TeamBoard>
        <Legend color="var(--blue)" reversed levelInfo={level1.teamBlue} />
      </Battlefield>
      <MainActionButton>Click here to battle!</MainActionButton>
    </StyledLevel>
  );
};

export default Level;
