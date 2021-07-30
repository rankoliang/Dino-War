import { StyledLegend, LegendLabel, Dino, LegendGroup } from './styled';
import { dinos } from '../data/dinos.js';

const Legend = ({ color, reversed, legend }) => {
  const legendData = Object.entries(legend);
  return (
    <StyledLegend color={color} reversed={reversed}>
      <LegendLabel>Points</LegendLabel>
      {legendData.map((set, i) => {
        const [dinoId, points] = set;
        return (
          <LegendGroup key={i}>
            <Dino as={dinos[dinoId].Component} />
            <span>{points}</span>
          </LegendGroup>
        );
      })}
    </StyledLegend>
  );
};

export default Legend;
