import { StyledLegend, LegendLabel, Dino, LegendGroup } from './styled';

const Legend = ({ color, reversed, levelInfo }) => {
  return (
    <StyledLegend color={color} reversed={reversed}>
      <LegendLabel>Points</LegendLabel>
      {levelInfo.onField.map(({dinoType, value}, i) => {
        return (
          <LegendGroup key={i}>
            <Dino as={dinoType} />
            <span>{value}</span>
          </LegendGroup>
        )
      })}
    </StyledLegend>
  );
};

export default Legend;
