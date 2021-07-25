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
import { level1, level2, level3, level4, level5, level6, level7, level8, level9, level10 } from "./staticLevels";
import './Level.css';

const randBetween = (low, high) => {
  return Math.floor(low + Math.random() * (high - low));
};
const placeRandom = () => ({
  transform: `
    scaleX(-1)
    translate(
      ${randBetween(-25, 25)}%,
      ${randBetween(-100, 100)}%
    )`,
})

const Level = () => {
  const { difficulty } = useParams();
  const [levelData] = useState(() => {
    switch (difficulty) {
      case ':1Beginner':
        return level1
    
      case ':2Beginner':
        return level2
    
      case ':3Beginner':
        return level3

      case ':4Beginner':
        return level4
     
      case ':5Beginner':
        return level5
    
      case ':6Beginner':
        return level6
    
      case ':7Beginner':
        return level7
    
      case ':8Beginner':
        return level8
    
      case ':9Beginner':
        return level9
    
      case ':10Beginner':
        return level10
    
      default:
        break;
    }
  });
    
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
    levelData.teamRed.onField.map(({dinoType, qty}) => {
      return {
        Component: dinoType,
        quantity: qty,
      };
    })
  );

  const [blueDinos] = useState(
    levelData.teamBlue.onField.map(({dinoType, qty}) => {
      return {
        Component: dinoType,
        quantity: qty,
      };
    })
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
        <Legend color="var(--red)" levelInfo={levelData.teamRed} />
        <TeamBoard>
          {redDinos.map(({ Component, quantity }, i) => {
            const jsxArray = []
            for (let i = 0; i < quantity; i++) {
              jsxArray.push(<Dino as={Component} style={placeRandom()} key={i} />)
            }
            return (
              <div key={i} >
                {jsxArray.map(element => element)}
              </div>
            )
            })}
        </TeamBoard>
        <TeamBoard reversed>
          {blueDinos.map(({ Component, quantity }, i) => {
            const jsxArray = []
            for (let i = 0; i < quantity; i++) {
              jsxArray.push(<Dino as={Component} style={placeRandom()} key={i} />)
            }
            return (
              <div key={i} >
                {jsxArray.map(element => element)}
              </div>
            )
            })}
        </TeamBoard>
        <Legend color="var(--blue)" reversed levelInfo={levelData.teamBlue} />
      </Battlefield>
      <MainActionButton>Click here to battle!</MainActionButton>
    </StyledLevel>
  );
};

export default Level;
