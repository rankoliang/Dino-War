import { StyledLegend, LegendLabel, Dino, LegendGroup } from './styled';
import { ReactComponent as OnePointRedDino } from '../../icons/dinosaurs/red-one-point.svg';
import { ReactComponent as TwoPointsRedDino } from '../../icons/dinosaurs/red-two-points.svg';
import { ReactComponent as FivePointsRedDino } from '../../icons/dinosaurs/red-five-points.svg';
import { ReactComponent as TenPointsRedDino } from '../../icons/dinosaurs/red-ten-points.svg';
import { ReactComponent as OnePointBlueDino } from '../../icons/dinosaurs/blue-one-point.svg';
import { ReactComponent as TwoPointsBlueDino } from '../../icons/dinosaurs/blue-two-points.svg';
import { ReactComponent as FivePointsBlueDino } from '../../icons/dinosaurs/blue-five-points.svg';
import { ReactComponent as TenPointsBlueDino } from '../../icons/dinosaurs/blue-ten-points.svg';

const Legend = ({ color, reversed }) => {
  return (
    <StyledLegend color={color} reversed={reversed}>
      <LegendLabel>Points</LegendLabel>
      <LegendGroup>
        <Dino as={color === "var(--red)" ? OnePointRedDino : OnePointBlueDino} />
        <span>1</span>
      </LegendGroup>
      <LegendGroup>
        <Dino as={color === "var(--red)" ? TwoPointsRedDino : TwoPointsBlueDino} />
        <span>2</span>
      </LegendGroup>
      <LegendGroup>
        <Dino as={color === "var(--red)" ? FivePointsRedDino : FivePointsBlueDino} />
        <span>5</span>
      </LegendGroup>
      <LegendGroup>
        <Dino as={color === "var(--red)" ? TenPointsRedDino : TenPointsBlueDino} />
        <span>10</span>
      </LegendGroup>
    </StyledLegend>
  );
};

export default Legend;
