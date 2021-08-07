import { FaBook } from 'react-icons/fa';
import { RulesBtn } from './styled';

const RulesButton = ({ setShown }) => {
  return (
    <RulesBtn
      title="Rules"
      className="rules"
      onClick={() => {
        setShown(true);
      }}
    >
      <FaBook size="5em" />
    </RulesBtn>
  );
};

export default RulesButton;
