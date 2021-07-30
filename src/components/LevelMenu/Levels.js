import { useState } from 'react'
import { ReactComponent as Badge1 } from '../../icons/badgeCompletion1.svg'
import { ReactComponent as Badge2 } from '../../icons/badgeCompletion2.svg'
import { ReactComponent as Badge3 } from '../../icons/badgeCompletion3.svg'
import { ReactComponent as Incomplete } from '../../icons/badgeNoComplete.svg'
import { LevelContainer, Card, LevelTitle, Link
} from './styled';

function Levels(props) {
  const [data, setData] = useState({
    1: "Incomplete",
    2: "Incomplete",
    3: "Incomplete",
    4: "Incomplete",
    5: "Incomplete",
    6: "Incomplete",
    7: "Incomplete",
    8: "Incomplete",
    9: "Incomplete",
    10: "Incomplete"
  })
  const levels = Object.entries(data)
  const renderStatus = (status) => {
    if (status === "Incomplete") {
      return <Incomplete />
    }
    if (status === "Badge1") {
      return <Badge1 />
    }
    if (status === "Badge2") {
      return <Badge2 />
    }
    if (status === "Badge3") {
      return <Badge3 />
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
