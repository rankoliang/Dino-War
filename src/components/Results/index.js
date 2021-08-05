import { useState, useEffect } from "react";
import { ResultIcon, Result } from "./styled";
import HomeButton from "../Icons/HomeIcon";
import LevelButton from "../Icons/LevelButton";
import RulesButton from "../Icons/RulesButton";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoMdRefreshCircle } from "react-icons/io";

const Results = (props) => {
  const { currentLevel, setShown } = props;
  const [ difficulty, setDifficulty ] = useState();
  const [ stage, setStage ] = useState();

  useEffect(() => {
    if (Number(currentLevel[1]) !== 10) {
      setDifficulty(currentLevel[0]);
      setStage(Number(currentLevel[1]) + 1)
    } else if (currentLevel[0] === "beginner") {
      setDifficulty("average");
      setStage("1");
    } else if (currentLevel[0] === "average") {
      setDifficulty("hard");
      setStage("1");
    } else {
      //End of the game, display a 'YOU WIN' message
    }
  }, [currentLevel]);

  return(
    <Result>
      <h1>Results!</h1>

      <div id="resultScore">
        [Results go here!]
      </div>

      <div className="resultsTop">
        <ResultIcon
          title="Retry"
          onClick={() => {window.location.reload()}}
        >
          <IoMdRefreshCircle />
        </ResultIcon>
        <ResultIcon
          href={"#/levels/" + difficulty + "/" + stage}
          title="Next Level"
        >
          <IoArrowForwardCircleSharp onClick={() => {setShown(false)}} />
        </ResultIcon>
      </div>

      <div className="resultsBtm">
        <HomeButton />
        <LevelButton />
        <RulesButton />
      </div>
    </Result>
  )
}

export default Results;