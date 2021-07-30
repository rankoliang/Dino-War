import { StyledLegend, LegendLabel, Dino, LegendGroup } from './styled';
import { ReactComponent as OnePointRedDino } from '../../icons/dinosaurs/red-one-point.svg';
import { ReactComponent as TwoPointsRedDino } from '../../icons/dinosaurs/red-two-points.svg';
import { ReactComponent as FivePointsRedDino } from '../../icons/dinosaurs/red-five-points.svg';
import { ReactComponent as TenPointsRedDino } from '../../icons/dinosaurs/red-ten-points.svg';

const Legend = ({ color, reversed }) => {
  return (
    <StyledLegend color={color} reversed={reversed}>
      <LegendLabel>Points</LegendLabel>
      <LegendGroup>
        <Dino as={OnePointRedDino} />
        <span>1</span>
      </LegendGroup>
      <LegendGroup>
        <Dino as={TwoPointsRedDino} />
        <span>2</span>
      </LegendGroup>
      <LegendGroup>
        <Dino as={FivePointsRedDino} />
        <span>5</span>
      </LegendGroup>
      <LegendGroup>
        <Dino as={TenPointsRedDino} />
        <span>10</span>
      </LegendGroup>
    </StyledLegend>
  );
};

export default Legend;
