import { ResultIcon, Result } from "./styled";
import { IoMdRefreshCircle, IoArrowForwardCircleSharp } from "react-icons/io";

const Results = () => {
  return(
    <Result>
      <h1>Results!</h1>

      <div id="resultScore">[Results go here!]</div>

      <div className="resultsTop">
        <ResultIcon
          href="#"
          title="Retry"
        >
          <IoMdRefreshCircle />
        </ResultIcon>
        <ResultIcon
          href="#"
          title="Next Level"
        >
          <IoArrowForwardCircleSharp />
        </ResultIcon>
      </div>

      <div className="resultsBtm">
        <HomeButton />
        <LevelButton />
        <RulesButton />
        <MusicButton />
      </div>
    </Result>
  )
}

export default Results;