import { FaLink } from 'react-icons/fa';
import { AttributionButton } from './styled';

const RulesButton = ({ setAttributionShown }) => {
  return (
    <AttributionButton
      title="Rules"
      className="rules"
      onClick={() => {
        setAttributionShown(true);
      }}
    >
      <FaLink size="5em" />
    </AttributionButton>
  );
};

export default RulesButton;
