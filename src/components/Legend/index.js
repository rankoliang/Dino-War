import { StyledLegend, LegendLabel, Dino, LegendGroup } from './styled';
import { dinos, legends } from '../Level/staticLevels'

const Legend = ({ color, reversed, levelInfo }) => {
  const legendData = Object.entries(legends[levelInfo])
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
