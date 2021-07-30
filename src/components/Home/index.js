import { useState } from "react";
import trianglify from 'trianglify';
import SettingsButton from "../Icons/SettingsButton";
import RulesButton from "../Icons/RulesButton";
import MusicButton from "../Icons/MusicButton";
import { App, AppHeader, AppLink, AppIcon, AppExtras } from './styled';
import { FaArrowCircleLeft } from "react-icons/fa";

const Home = () => {
  const [pattern] = useState(
    trianglify({
      cellSize: 200,
      height: 3840,
      width: 2160,
      xColors: 'YlGn',
      colorFunction: trianglify.colorFunctions.shadows(),
    })
      .toSVGTree()
      .toString()
  );
  const [ rulesShown, setRulesShown ] = useState(false);

  const rulesClick = () => {
    setRulesShown(true);
  };

  return (
    <App background={pattern}>
      <AppHeader>
        {rulesShown && <Rules setShown={setRulesShown} />}
        <p className="title">
          Dino-War
        </p>
        <AppLink
          href="#"
          title="Battle!"
        >
          Level 1
        </AppLink>
        <IconLink
          href="#"
          title="Previous Level"
        >
          <FaArrowCircleLeft />
        </IconLink>

        <AppExtras>
          <SettingsButton />
          <MusicButton />
          <RulesButton onClick={rulesClick} />
        </AppExtras>
      </AppHeader>
    </App>
  );
};

export default Home;