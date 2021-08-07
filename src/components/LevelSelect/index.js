import { useState } from 'react';
import {
  BackgroundStyle,
  Container,
  DifficultySelect,
  LeftSelection,
  CurrentSelection,
  RightSelection,
  IconStyle,
  ButtonNavigation,
  AppLink,
} from './styled';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import Levels from './Levels';
import trianglify from 'trianglify';

const LevelSelect = () => {
  const [leftText, setLeftText] = useState('hard');
  const [centerText, setCenterText] = useState('beginner');
  const [rightText, setRightText] = useState('average');

  const handleClick = (arrow) => {
    if (arrow === 'next') {
      setCenterText(rightText);
      setLeftText(centerText);
      setRightText(leftText);
    } else {
      setCenterText(leftText);
      setRightText(centerText);
      setLeftText(rightText);
    }
  };
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
    <BackgroundStyle background={pattern}>
      <Container>
        <ButtonNavigation>
          <AppLink to="/">
            <FaHome size="2.5rem" />
          </AppLink>
        </ButtonNavigation>
        <DifficultySelect>
          <LeftSelection>{leftText}</LeftSelection>
          <IconStyle>
            <IoIosArrowBack onClick={() => handleClick('prev')} size="2.5rem" />
          </IconStyle>
          <CurrentSelection>{centerText}</CurrentSelection>
          <IconStyle>
            <IoIosArrowForward
              onClick={() => handleClick('next')}
              size="2.5rem"
            />
          </IconStyle>
          <RightSelection>{rightText}</RightSelection>
        </DifficultySelect>
        <Levels selection={centerText} />
      </Container>
    </BackgroundStyle>
  );
};

export default LevelSelect;
