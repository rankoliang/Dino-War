import { FaHome } from "react-icons/fa";
import { IconLink } from './styled';

const HomeButton = () => {
  return (
    <IconLink
      title="Home"
      className="home"
      href="#/"
    >
      <FaHome />
    </IconLink>
  )
};

export default HomeButton;