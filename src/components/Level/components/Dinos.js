import { DinoIcon, Points, DinoWrapper, PointsWrapper } from '../styled';
import { dinoTransform, makeSetDino } from '../helpers';
import Dino from './Dino';

const Dinos = ({ setDinos, dinos }) => {
  return dinos.map((dino, i) => {
    const setDino = makeSetDino(setDinos, i);

    return <Dino dino={dino} setDino={setDino} />;
  });
};

export default Dinos;
