import { FaLink } from 'react-icons/fa';
import { AttributionBtn } from './styled';

const AttributionButton = ({ setAttributionShown }) => {
  return (
    <AttributionBtn
      title="Rules"
      className="rules"
      onClick={() => {
        setAttributionShown(true);
      }}
    >
      <FaLink size="5em" />
    </AttributionBtn>
  );
};

export default AttributionButton;
