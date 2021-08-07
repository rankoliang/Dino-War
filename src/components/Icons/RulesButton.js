import { FaBook } from 'react-icons/fa';
import { RulesLink } from './styled';

const RulesButton = ({ setShown }) => {
  return (
    <RulesLink
      title="Rules"
      className="rules"
      onClick={() => {
        setShown(true);
      }}
    >
      <FaBook size="5em" />
    </RulesLink>
  );
};

export default RulesButton;
