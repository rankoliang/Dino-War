import { useMemo } from 'react';
import { StyledMainActionButton } from '../styled';

const MainActionButton = ({ phase, onClick, winner }) => {
  const text = useMemo(() => {
    switch (phase) {
      case 'counting':
        return 'Counting';
      case 'main':
      case 'transitioning':
        return 'Click here to battle!';
      case 'results':
        return winner ? `${winner} wins!` : 'Both teams tie!';
      default:
        return 'Something went wrong!';
    }
  }, [phase]);

  return (
    <StyledMainActionButton onClick={onClick} phase={phase}>
      {text}
    </StyledMainActionButton>
  );
};

export default MainActionButton;
