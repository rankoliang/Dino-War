import { useParams } from 'react-router-dom';
import { TeamNames, TeamName } from './styled';

const Level = () => {
  const { difficulty } = useParams();

  return (
    <TeamNames>
      <TeamName background="var(--red)">Red Team</TeamName>
      <TeamName background="var(--blue)">Blue Team</TeamName>
    </TeamNames>
  );
};

export default Level;
