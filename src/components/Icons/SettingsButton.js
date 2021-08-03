import { FaCog } from "react-icons/fa";
import { IconLink } from './styled';

const SettingsButton = () => {
  return (
    <IconLink
      to="/settings"
      title="Settings"
    >
      <FaCog />
    </IconLink>
  )
};

export default SettingsButton;