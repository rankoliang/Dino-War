import { useState } from 'react';
import { ReactComponent as Badge1 } from '../../icons/badgeCompletion1.svg'
import { ReactComponent as Badge2 } from '../../icons/badgeCompletion2.svg'
import { ReactComponent as Badge3 } from '../../icons/badgeCompletion3.svg'
import { ReactComponent as Incomplete } from '../../icons/badgeNoComplete.svg'
import { StyledLevel, LevelContainer, Card, LevelTitle, Container, DifficultySelect, LeftSelection, CurrentSelection, RightSelection, IconStyle, ButtonNavigation, Link
} from './styled';
import { IoMdArrowRoundBack, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import trianglify from 'trianglify';

const LevelMenu = () => {
  const [leftText, setLeftText] = useState('Hard')
  const [centerText, setCenterText] = useState('Beginner')
  const [rightText, setRightText] = useState('Average')

  const handleClick = (arrow) => {
    if (arrow === "next") {
        setCenterText(rightText);
        setLeftText(centerText);
        setRightText(leftText);
    } else {
        setCenterText(leftText);
        setRightText(centerText);
        setLeftText(rightText);
    }  
  }
  const [pattern] = useState(
    trianglify({
      cellSize: 100,
      height: 3840,
      width: 2160,
      xColors: 'YlGn',
      colorFunction: trianglify.colorFunctions.shadows(),
    })
      .toSVGTree()
      .toString()
  );
  return (
    <StyledLevel background={pattern} >
      <Container>
        <ButtonNavigation>
          <IconStyle>
            <IoMdArrowRoundBack size="2.5rem"/>
          </IconStyle>
          <IconStyle>
            <FaHome size="2.5rem"/>
          </IconStyle>
        </ButtonNavigation>
        <DifficultySelect>
          <LeftSelection>{leftText}</LeftSelection>
          <IconStyle>
            <IoIosArrowBack onClick={() => handleClick("prev")} size="2.5rem"/>
          </IconStyle>
          <CurrentSelection>{centerText}</CurrentSelection>
          <IconStyle>
            <IoIosArrowForward onClick={() => handleClick("next")} size="2.5rem"/>
          </IconStyle>
          <RightSelection>{rightText}</RightSelection>
        </DifficultySelect>
        <LevelContainer>
          <Card>
            <Link href='#/levels/:1' />
            <LevelTitle>Level 1</LevelTitle>
            <Incomplete />
          </Card>
          <Card>
            <Link href='#/levels/:2' />
            <LevelTitle>Level 2</LevelTitle>
            <Incomplete />
          </Card>
          <Card>
            <Link href='#/levels/:3' />
            <LevelTitle>Level 3</LevelTitle>
            <Incomplete />
          </Card>
          <Card>
            <Link href='#/levels/:4' />
            <LevelTitle>Level 4</LevelTitle>
            <Incomplete />
          </Card>
          <Card>
            <Link href='#/levels/:5' />
            <LevelTitle>Level 5</LevelTitle>
            <Incomplete />
          </Card>
          <Card>
            <Link href='#/levels/:6' />
            <LevelTitle>Level 6</LevelTitle>
            <Incomplete />
          </Card>
          <Card>
            <Link href='#/levels/:7' />
            <LevelTitle>Level 7</LevelTitle>
            <Incomplete />
          </Card>
          <Card>
            <Link href='#/levels/:8' />
            <LevelTitle>Level 8</LevelTitle>
            <Incomplete />
          </Card>
          <Card>
            <Link href='#/levels/:9' />
            <LevelTitle>Level 9</LevelTitle>
            <Incomplete />
          </Card>
          <Card>
            <Link href='#/levels/:10' />
            <LevelTitle>Level 10</LevelTitle>
            <Incomplete />
          </Card>
        </LevelContainer>
        </Container>
    </StyledLevel >
  );
};

export default LevelMenu
