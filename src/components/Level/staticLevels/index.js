import { ReactComponent as Dino01 } from '../../../icons/dinosaurs/dino-01.svg';
import { ReactComponent as Dino02 } from '../../../icons/dinosaurs/dino-02.svg';
import { ReactComponent as Dino03 } from '../../../icons/dinosaurs/dino-03.svg';
import { ReactComponent as Dino04 } from '../../../icons/dinosaurs/dino-04.svg';
import { ReactComponent as Dino05 } from '../../../icons/dinosaurs/dino-05.svg';
import { ReactComponent as Dino06 } from '../../../icons/dinosaurs/dino-06.svg';
import { ReactComponent as Dino07 } from '../../../icons/dinosaurs/dino-07.svg';
import { ReactComponent as Dino08 } from '../../../icons/dinosaurs/dino-08.svg';
import { ReactComponent as Dino09 } from '../../../icons/dinosaurs/dino-09.svg';
import { ReactComponent as Dino10 } from '../../../icons/dinosaurs/dino-10.svg';

export const dinos = {
    '1': { id: 1, Component: Dino01 },
    '2': { id: 2, Component: Dino02 },
    '3': { id: 3, Component: Dino03 },
    '4': { id: 4, Component: Dino04 },
    '5': { id: 5, Component: Dino05 },
    '6': { id: 6, Component: Dino06 },
    '7': { id: 7, Component: Dino07 },
    '8': { id: 8, Component: Dino08 },
    '9': { id: 9, Component: Dino09 },
    '10': { id: 10, Component: Dino10 },
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
    '1': {
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
    '2': {
      range: {
        low: 1,
        high: 3,
      },
      legends: {
        red: 4,
        blue: 9,
      }
    },
    '3': {
      range: {
        low: 2,
        high: 2,
      },
      legends: {
        red: 3,
        blue: 14,
      }
    },
    '4': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 1,
        blue: 10,
      }
    },
    '5': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 8,
        blue: 11,
      }
    },
    '6': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 7,
        blue: 12,
      }
    },
    '7': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 6,
        blue: 13,
      }
    },
    '8': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 5,
        blue: 14,
      }
    },
    '9': {
      range: {
        low: 1,
        high: 4,
      },
      legends: {
        red: 4,
        blue: 15,
      }
    },
    '10': {
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