import {
  StyledLegend,
  LegendLabel,
  DinoWrapper,
  Dino,
  LegendGroup,
} from './styled';
import dinos from '../../data/dinos.js';

const Legend = ({ color, reversed, legend }) => {
  const legendData = Object.entries(legend);
  return (
    <StyledLegend color={color} reversed={reversed}>
      <LegendLabel>Points</LegendLabel>
      {legendData.map(([dinoId, points], i) => {
        const dino = dinos[dinoId];

        return (
          <LegendGroup key={i}>
            <DinoWrapper skull={dino.skull}>
              <Dino as={dino.Component} />
            </DinoWrapper>
            <span>{points}</span>
          </LegendGroup>
        );
      })}
    </StyledLegend>
  );
};

export default Legend;
