import Legend from '../../Legend';
import { TeamBoard, StyledBattlefield } from '../styled';
import Dinos from './Dinos';

const Battlefield = ({ dinos, setDinos, legends }) => {
  return (
    <StyledBattlefield>
      <Legend color="var(--red)" legend={legends.red} />
      <TeamBoard>
        <Dinos dinos={dinos.red} setDinos={setDinos.red} />
      </TeamBoard>
      <TeamBoard reversed>
        <Dinos dinos={dinos.blue} setDinos={setDinos.blue} />
      </TeamBoard>
      <Legend color="var(--blue)" reversed legend={legends.blue} />
    </StyledBattlefield>
  );
};

export default Battlefield;
