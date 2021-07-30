import { FaVolumeUp } from "react-icons/fa";

const MusicButton = () => {
  return (
    <IconLink
      title="Rules"
      className="rules"
      onClick={rulesClick}
    >
      <FaVolumeUp />
    </IconLink>
  )
};

export default MusicButton;