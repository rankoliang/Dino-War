import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const slideIn = keyframes`
  0% {
    left: 0%;
    transform: translate(-100%, -50%);
  }
`;

export const StyledResults = styled.div`
  z-index: 2;
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  border: 2px outset var(--red);
  background: var(--red);
  color: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

  animation-duration: 0.75s;
  animation-name: ${slideIn};
  animation-timing-function: ease-in;

  * {
    color: #fff;
  }
`;

export const Header = styled.h1`
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 2rem;
`;

export const Result = styled(Header).attrs({
  as: 'h2',
})`
  font-size: 4em;
  margin-bottom: 2rem;
  white-space: nowrap;
`;

export const ResultsPrimaryControls = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ResultsSecondaryControls = styled.div`
  display: flex;
  align-items: center;

  * {
    margin: 0.5rem;
  }

  svg {
    width: 2em;
    height: 2em;
  }
`;

export const NextLevelLink = styled(Link)`
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  margin: auto;
  transition: all 0.2s;
  font-size: 1em;

  &:hover {
    transform: scale(1.2);
  }

  svg {
    width: 5em;
    height: 5em;
  }
`;

export const RetryButton = styled(NextLevelLink).attrs({
  as: 'button',
})`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
