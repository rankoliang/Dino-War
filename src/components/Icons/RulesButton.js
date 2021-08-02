import { FaBook } from "react-icons/fa";
import { IconLink } from './styled';

const RulesButton = () => {
  return (
    <IconLink
      title="Rules"
      className="rules"
    >
      <FaBook />
    </IconLink>
  )
};

export default RulesButton;