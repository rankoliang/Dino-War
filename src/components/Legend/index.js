import { StyledLegend, LegendLabel, Dino, LegendGroup } from './styled';
import { dinos } from '../Level/staticLevels'

const Legend = ({ color, reversed, teamId }) => {
  const legendData = Object.entries(teamId)
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
      )})}
    </StyledLegend>
  );
};

export default Legend;
