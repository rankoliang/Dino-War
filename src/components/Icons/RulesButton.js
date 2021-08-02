import { FaBook } from "react-icons/fa";
import { RulesLink } from './styled';

const RulesButton = () => {
  return (
    <RulesLink
      title="Rules"
      className="rules"
    >
      <FaBook />
    </RulesLink>
  )
};

export default RulesButton;