import { StyledLegend, LegendLabel, Dino, LegendGroup } from './styled';

const Legend = ({ color, reversed, levelInfo }) => {
  return (
    <StyledLegend color={color} reversed={reversed}>
      <LegendLabel>Points</LegendLabel>
      {levelInfo.onField.map(({dino, value}) => {
        return (
      <LegendGroup>
        <Dino as={dino} />
        <span>{value}</span>
      </LegendGroup>
        )
      })}
    </StyledLegend>
  );
};

export default Legend;
