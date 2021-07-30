import { ResultIcon, Result } from "./styled";
import { IoMdRefreshCircle, IoArrowForwardCircleSharp } from "react-icons/io";
import { FaCog, FaHome, FaListOl } from "react-icons/fa";

const Results = () => {
  return(
    <Result>
      <h1>Results!</h1>

      <div id="resultScore">[Results go here!]</div>

      <div className="resultsTop">
        <ResultIcon
          href="#"
          title="Refresh"
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
        <ResultIcon
          href="#"
          title="Settings"
        >
          <FaCog />
        </ResultIcon>
        <ResultIcon
          href="/"
          title="Home"
        >
          <FaHome />
        </ResultIcon>
        <ResultIcon
          href="#"
          title="Level Select"
        >
          <FaListOl />
        </ResultIcon>
      </div>
    </Result>
  )
}

export default Results;