import Legend from '../../Legend';
import { Dino, TeamBoard, StyledBattlefield } from '../styled';
import { dinoStyle } from '../helpers';

const Battlefield = ({ dinos, legends }) => {
  return (
    <StyledBattlefield>
      <Legend color="var(--red)" legend={legends.red} />
      <TeamBoard>
        {dinos.red.map(({ Component, ...dino }, i) => (
          <Dino as={Component} style={dinoStyle(dino)} key={i} />
        ))}
      </TeamBoard>
      <TeamBoard reversed>
        {dinos.blue.map(({ Component, ...dino }, i) => (
          <Dino as={Component} style={dinoStyle(dino)} key={i} />
        ))}
      </TeamBoard>
      <Legend color="var(--blue)" reversed legend={legends.blue} />
    </StyledBattlefield>
  );
};

export default Battlefield;
