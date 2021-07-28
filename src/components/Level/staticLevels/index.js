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
    //red - 8 different legend boards
    '1': {
      '1': 1,
      '2': 2,
      '3': 3
    },
    '2': {
      '2': 2,
      '3': 3,
      '4': 5
    },
    '3': {
      '3': 3,
      '4': 5,
      '5': 10
    },
    '4': {
      '1': 1,
      '2': 2,
      '5': 10
    },
    '5': {
      '1': 1,
      '2': 2,
      '4': 5
    },
    '6': {
      '1': 1,
      '3': 3,
      '5': 10
    },
    '7': {
      '1': 1,
      '4': 5,
      '5': 10
    },
    '8': {
      '2': 2,
      '3': 3,
      '5': 10
    },
    //blue - 8 different legend boards
    '9': {
      '6': 1,
      '7': 2,
      '8': 3
    },
    '10': {
      '7': 2,
      '8': 3,
      '9': 5
    },
    '11': {
      '8': 3,
      '9': 5,
      '10': 10
    },
    '12': {
      '6': 1,
      '7': 2,
      '10': 10
    },
    '13': {
      '6': 1,
      '7': 2,
      '9': 5
    },
    '14': {
      '6': 1,
      '8': 3,
      '10': 10
    },
    '15': {
      '6': 1,
      '9': 5,
      '10': 10
    },
    '16': {
      '7': 2,
      '9': 5,
      '10': 10
    },
  }

  export const levels = { //first three levels are fixed winners.
    ':1': {
      // range of number of dinos to be generated
      range: {
        low: 1,
        high: 1,
      },
      legends: {
        red: 5,
        blue: 11,
      }
    },
    ':2': {
      range: {
        low: 1,
        high: 3,
      },
      legends: {
        red: 4,
        blue: 9,
      }
    },
    ':3': {
      range: {
        low: 2,
        high: 2,
      },
      legends: {
        red: 3,
        blue: 14,
      }
    },
    ':4': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 1,
        blue: 10,
      }
    },
    ':5': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 8,
        blue: 11,
      }
    },
    ':6': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 7,
        blue: 12,
      }
    },
    ':7': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 6,
        blue: 13,
      }
    },
    ':8': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 5,
        blue: 14,
      }
    },
    ':9': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 4,
        blue: 15,
      }
    },
    ':10': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 3,
        blue: 16,
      }
    },
  }