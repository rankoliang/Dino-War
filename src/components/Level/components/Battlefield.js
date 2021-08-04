import { useCallback } from 'react';
import Legend from '../../Legend';
import {
  DinoIcon,
  Points,
  TeamBoard,
  StyledBattlefield,
  DinoWrapper,
  PointsWrapper,
} from '../styled';
import { dinoStyle, makeUpdateDino } from '../helpers';

const Dinos = ({ setDinos, dinos }) => {
  const updateDino = useCallback(makeUpdateDino(setDinos), [setDinos]);

  return dinos.map(({ Component, animating, points, scaleX, ...dino }, i) => {
    const handleAnimationEnd = () => {
      updateDino(i, () => {
        return { animating: false };
      });
    };

    return (
      <DinoWrapper style={dinoStyle(dino)} key={i}>
        <DinoIcon as={Component} style={{ transform: `scaleX(${scaleX})` }} />
        {animating && (
          <PointsWrapper>
            <Points onAnimationEnd={handleAnimationEnd} style={dinoStyle(dino)}>
              {points}
            </Points>
          </PointsWrapper>
        )}
      </DinoWrapper>
    );
  });
};

const Battlefield = ({ dinos, setDinos, legends }) => {
  return (
    <StyledBattlefield>
      <Legend color="var(--red)" legend={legends.red} />
      <TeamBoard>
        <Dinos dinos={dinos.red} setDinos={setDinos.red} />
      </TeamBoard>
      <TeamBoard reversed>
        <Dinos dinos={dinos.blue} setDinos={setDinos.blue} />
      </TeamBoard>
      <Legend color="var(--blue)" reversed legend={legends.blue} />
    </StyledBattlefield>
  );
};

export default Battlefield;
