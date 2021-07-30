import { useState } from 'react'
import { ReactComponent as Badge1 } from '../../icons/badgeCompletion1.svg'
import { ReactComponent as Badge2 } from '../../icons/badgeCompletion2.svg'
import { ReactComponent as Badge3 } from '../../icons/badgeCompletion3.svg'
import { ReactComponent as Incomplete } from '../../icons/badgeNoComplete.svg'
import { LevelContainer, Card, LevelTitle, Link
} from './styled';

function Levels(props) {
  const [data, setData] = useState({
    1: "incomplete",
    2: "incomplete",
    3: "incomplete",
    4: "incomplete",
    5: "incomplete",
    6: "incomplete",
    7: "incomplete",
    8: "incomplete",
    9: "incomplete",
    10: "incomplete"
  })
  const levels = Object.entries(data)
  const renderStatus = (status) => {
    if (status === "incomplete") {
      return (
        <Incomplete />
      )
    }
    if (status === "Badge1") {
      return (
        <Badge1 />
      )
    }
    if (status === "Badge2") {
      return (
        <Badge2 />
      )
    }
    if (status === "Badge3") {
      return (
        <Badge3 />
      )
    }
  }
    return (
        <LevelContainer>
          {levels.map((data, i) => {
            const [level, status] = data;
            return (
              <Card key={i} >
                <Link href={`#/levels/${props.selection}/:${level}`} />
                <LevelTitle>{`Level ${level}`}</LevelTitle>
                {renderStatus(status)}
              </Card>
              )
            })}
        </LevelContainer>
    )
}

export default Levels
