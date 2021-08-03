import { FaVolumeUp } from "react-icons/fa";
import { IconLink } from './styled';

const MusicButton = () => {
  return (
    <IconLink
      title="Music"
      className="music"
    >
      <FaVolumeUp />
    </IconLink>
  )
};

export default MusicButton;