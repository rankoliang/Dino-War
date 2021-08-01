import { FaCog } from "react-icons/fa";
import { IconLink } from './styled';

const SettingsButton = () => {
  return (
    <IconLink
      href="#"
      title="Settings"
    >
      <FaCog />
    </IconLink>
  )
};

export default SettingsButton;