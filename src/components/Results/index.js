import { ResultIcon, Result } from "./styled";
import { IoMdRefresh, IoMdArrowRoundForward } from "react-icons/io";
import { FaCog, FaShieldAlt, FaHome, FaListOl } from "react-icons/fa";

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
          <IoMdRefresh />
        </ResultIcon>
        <ResultIcon
          href="#"
          title="Next Level"
        >
          <IoMdArrowRoundForward />
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
          href="#"
          title="Home"
        >
          <FaHome />
        </ResultIcon>
        <ResultIcon
          href="#"
          title="Badges"
        >
          <FaShieldAlt />
        </ResultIcon>
        <ResultIcon
          href="#"
          title="Badges"
        >
          <FaListOl />
        </ResultIcon>
      </div>
    </Result>
  )
}

export default Results;