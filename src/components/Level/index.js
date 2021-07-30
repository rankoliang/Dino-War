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
import { dinos, legends, levels } from "./staticLevels";
import Legend from '../Legend';
import Counter from '../Counter';
import counterReducer from '../Counter/reducer';
import trianglify from 'trianglify';
import './Level.css';

const randBetween = (low, high) => {
  return Math.floor(low + Math.random() * (high - low));
};

const Level = () => {
  const { difficulty } = useParams();
  const levelId = difficulty.split('')[1];
  const level = levels[levelId];
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

  const [redDinos] = useState(() => {
    const redDinoIds = Object.keys(legends[redLegendId]);
    return redDinoIds.map((dinoId) => {
        return {
          Component: dinos[dinoId].Component
        };
      })
    }
  );

  const [blueDinos] = useState(() => {
    const blueDinoIds = Object.keys(legends[blueLegendId]);
    return blueDinoIds.map((dinoId) => {
        return {
          Component: dinos[dinoId].Component
        };
      })
    }
  );

  const dinoPerLvlRange = Component => {
    const range = randBetween(level.range.low, level.range.high)
    const componentArray = []
    for (let i = 0; i < range; i++) {
        componentArray.push(
        <Dino as={Component} style={{
            transform: `
              scaleX(-1)
              translate(
                ${randBetween(-25, 25)}%,
                ${randBetween(-100, 100)}%
              )`,
          }} key={i} />
          )
    }
    return componentArray
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
        <Legend color="var(--red)" legend={legends[redLegendId]} />
        <TeamBoard>
        {redDinos.map(({ Component }) => {
            return dinoPerLvlRange(Component)
          })}
        </TeamBoard>
        <TeamBoard reversed>
        {blueDinos.map(({ Component }) => {
            return dinoPerLvlRange(Component)
          })}
        </TeamBoard>
        <Legend color="var(--blue)" reversed legend={legends[blueLegendId]} />
      </Battlefield>
      <MainActionButton>Click here to battle!</MainActionButton>
    </StyledLevel>
  );
};

export default Level;
