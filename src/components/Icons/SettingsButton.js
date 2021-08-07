import { FaCog } from 'react-icons/fa';
import { IconLink } from './styled';

const SettingsButton = ({ color }) => {
  return (
    <IconLink to="/settings" title="Settings" color={color}>
      <FaCog />
    </IconLink>
  );
};

export default SettingsButton;

