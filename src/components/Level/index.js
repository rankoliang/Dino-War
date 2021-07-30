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
import { dinos } from '../data/dinos.js';
import { legends } from '../data/legends.js';
import { levels } from '../data/levels.js';
import Legend from '../Legend';
import Counter from '../Counter';
import counterReducer from '../Counter/reducer';
import trianglify from 'trianglify';
import './Level.css';
import shuffle from 'shuffle-array';

const randBetween = (low, high) => {
  return Math.floor(low + Math.random() * (high - low));
};

const Level = () => {
  const { stage } = useParams();
  const difficulty = window.location.href
    .split('/')
    .filter(
      (name) => name === 'beginner' || name === 'average' || name === 'hard'
    );
  const level = levels[difficulty][stage];
  const redLegendId = level.legends.red;
  const blueLegendId = level.legends.blue;
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

  const getRange = (dinoIds) => {
    const { low, high } = level.range;

    const dinoArray = dinoIds.reduce((dinos, id) => {
      const dinoCount = randBetween(low, high);
      for (let i = 0; i < dinoCount; i++) {
        dinos.push(id);
      }
      return dinos;
    }, []);
    return dinoArray;
  };

  const [redDinos] = useState(() => {
    const redDinoIds = Object.keys(legends[redLegendId]);
    const dinoArray = getRange(redDinoIds);
    shuffle(dinoArray);
    return dinoArray.map((dinoId) => {
      return {
        Component: dinos[dinoId].Component,
        style: {
          transform: `
            scaleX(-1)
            translate(
              ${randBetween(-25, 25)}%,
              ${randBetween(-100, 100)}%
            )`,
        },
      };
    });
  });

  const [blueDinos] = useState(() => {
    const blueDinoIds = Object.keys(legends[blueLegendId]);
    const dinoArray = getRange(blueDinoIds);
    shuffle(dinoArray);
    return dinoArray.map((dinoId) => {
      return {
        Component: dinos[dinoId].Component,
        style: {
          transform: `
            scaleX(-1)
            translate(
              ${randBetween(-25, 25)}%,
              ${randBetween(-100, 100)}%
            )`,
        },
      };
    });
  });
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
        <Legend color="var(--red)" legend={legends[redLegendId]} />
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
        <Legend color="var(--blue)" reversed legend={legends[blueLegendId]} />
      </Battlefield>
      <MainActionButton>Click here to battle!</MainActionButton>
    </StyledLevel>
  );
};

export default Level;
