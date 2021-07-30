import { StyledLegend, LegendLabel, Dino, LegendGroup } from './styled';
import { dinos } from '../Level/staticLevels'

const Legend = ({ color, reversed, teamId }) => {
  const legendData = Object.entries(teamId)
  return (
    <StyledLegend color={color} reversed={reversed}>
      <LegendLabel>Points</LegendLabel>
      {legendData.map((set, i) => (
        <LegendGroup key={i}>
          <Dino as={dinos[set[0]].Component} />
          <span>{set[1]}</span>
        </LegendGroup>
      ))}
    </StyledLegend>
  );
};

export default Legend;
