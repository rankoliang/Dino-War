import { useState, useEffect, useMemo } from 'react';
import { StyledMainActionButton } from '../styled';

const colors = {
  'Red Team': 'var(--red)',
  'Blue Team': 'var(--blue)',
};

const MainActionButton = ({ phase, onClick, winner }) => {
  const [color, setColor] = useState(colors[winner]);

  useEffect(() => {
    if (winner) {
      setColor(colors[winner]);
    }
  }, [winner]);

  const text = useMemo(() => {
    switch (phase) {
      case 'counting':
        return 'Counting...';
      case 'main':
      case 'transitioning':
        return 'Click here to battle!';
      case 'results':
        return winner ? `${winner} wins!` : 'Both teams tie!';
      default:
        return 'Something went wrong!';
    }
  }, [phase, winner]);

  return (
    <StyledMainActionButton
      color={color}
      phase={phase}
      onClick={onClick}
      phase={phase}
    >
      {text}
    </StyledMainActionButton>
  );
};

export default MainActionButton;
