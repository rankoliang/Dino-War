import { useState, useEffect } from "react";
import Rules from "../Rules/rules";
import trianglify from 'trianglify';
import { App, AppHeader, AppLink, AppIcon, AppExtras } from './styled';
import { FaArrowCircleLeft, FaCog, FaVolumeUp, FaBook } from "react-icons/fa";

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

  useEffect(() => {
    const ruleBtn = document.querySelector(".rules");
    const ruleModal = document.querySelector("#modal");

    ruleBtn.addEventListener("click", () => {
      ruleModal.style.display = "block";
    })
  }, [])

  return (
    <App background={pattern}>
      <AppHeader>
        <Rules />
        <p className="title">
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
            title="Instructions"
            className="rules"
          >
            <FaBook />
          </AppIcon>
        </AppExtras>
      </AppHeader>
    </App>
  );
};

export default Home;