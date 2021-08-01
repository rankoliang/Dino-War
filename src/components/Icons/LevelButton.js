import { FaListOl } from "react-icons/fa";
import { IconLink } from './styled';

const LevelButton = () => {
  return (
    <IconLink
      title="Level Select"
      className="levelSelect"
      to="/levelselect"
    >
      <FaListOl />
    </IconLink>
  )
};

export default LevelButton;