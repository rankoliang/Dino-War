import { FaBook } from "react-icons/fa";
import { RulesLink } from './styled';

const RulesButton = ({setShown}) => {

  return (
    <RulesLink
      title="Rules"
      className="rules"
      onClick={() => {setShown(true)}}
    >
      <FaBook />
    </RulesLink>
  )
};

export default RulesButton;