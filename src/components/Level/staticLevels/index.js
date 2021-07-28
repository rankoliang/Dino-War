import { ReactComponent as OnePointRedDino } from '../../../icons/dinosaurs/red-one-point.svg';
import { ReactComponent as TwoPointsRedDino } from '../../../icons/dinosaurs/red-two-points.svg';
import { ReactComponent as ThreePointsRedDino } from '../../../icons/dinosaurs/red-three-points.svg';
import { ReactComponent as FivePointsRedDino } from '../../../icons/dinosaurs/red-five-points.svg';
import { ReactComponent as TenPointsRedDino } from '../../../icons/dinosaurs/red-ten-points.svg';

import { ReactComponent as OnePointBlueDino } from '../../../icons/dinosaurs/blue-one-point.svg';
import { ReactComponent as TwoPointsBlueDino } from '../../../icons/dinosaurs/blue-two-points.svg';
import { ReactComponent as ThreePointsBlueDino } from '../../../icons/dinosaurs/blue-three-points.svg';
import { ReactComponent as FivePointsBlueDino } from '../../../icons/dinosaurs/blue-five-points.svg';
import { ReactComponent as TenPointsBlueDino } from '../../../icons/dinosaurs/blue-ten-points.svg';

export const dinos = {
    '1': { id: 1, Component: OnePointRedDino },
    '2': { id: 2, Component: TwoPointsRedDino },
    '3': { id: 3, Component: ThreePointsRedDino },
    '4': { id: 4, Component: FivePointsRedDino },
    '5': { id: 5, Component: TenPointsRedDino },
    '6': { id: 6, Component: OnePointBlueDino },
    '7': { id: 7, Component: TwoPointsBlueDino },
    '8': { id: 8, Component: ThreePointsBlueDino },
    '9': { id: 9, Component: FivePointsBlueDino },
    '10': { id: 10, Component: TenPointsBlueDino },
  }
  
  export const legends = {
    // key = dino id
      // value = points
    '1': {
      '1': 1,
      '2': 2,
      '4': 5
    },
    '2': {
      '8': 3,
      '9': 5,
      '10': 10
    },
    '3': {
      '1': 1,
      '2': 2,
      '5': 10,
    },
    '4': {
      '6': 1,
      '7': 2,
      '8': 3,
    },
  }

  export const levels = {
    ':1': {
      // range of number of dinos to be generated
      range: {
        low: 3,
        high: 5,
      },
      legends: {
        red: 1,
        blue: 2,
      }
    },
    ':2': {
      range: {
        low: 3,
        high: 5,
      },
      legends: {
        red: 3,
        blue: 4,
      }
    },
  }