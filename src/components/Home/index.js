import { App, AppHeader, AppLink, AppIcon, AppExtras } from './styled';
import { FaArrowCircleLeft, FaCog, FaVolumeUp, FaBook } from "react-icons/fa";

const Home = () => {
  return (
    <App>
      <AppHeader>
        <p>
          Dino-War
        </p>
        <AppLink
          href="#"
          title="Battle!"
        >
          Level 1
        </AppLink>
        <AppIcon
          href="#"
          title="Previous Level"
        >
          <FaArrowCircleLeft />
        </AppIcon>

        <AppExtras>
          <AppIcon
            href="#"
            title="Settings"
          >
            <FaCog />
          </AppIcon>
          <AppIcon
            href="#"
            title="Music"
          >
            <FaVolumeUp />
          </AppIcon>
          <AppIcon
            href="#"
            title="Instructions"
          >
            <FaBook />
          </AppIcon>
        </AppExtras>
      </AppHeader>
    </App>
  );
};

export default Home;