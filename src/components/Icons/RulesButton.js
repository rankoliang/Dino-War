import { FaBook } from "react-icons/fa";

const RulesButton = () => {
  return (
    <IconLink
      title="Rules"
      className="rules"
      onClick={rulesClick}
    >
      <FaBook />
    </IconLink>
  )
};

export default RulesButton;