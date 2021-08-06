import styled, { css, keyframes } from 'styled-components';

const successGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 1rem 2px #219653;
  }

  50% {
    box-shadow: 0 0 2.5rem 8px #219653;
  }
`;

export const StyledScoreResult = styled.div`
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
  margin: 1rem;
  color: white;
  text-align: center;
  transition: box-shadow 0.5s;
  box-shadow: 0 0 1rem 2px rgba(0, 0, 0, 0.25);

  ${({ correct }) =>
    correct &&
    css`
      animation-duration: 3s;
      animation-name: ${successGlow};
      animation-iteration-count: infinite;
      animation-timing-function: ease-out;
      animation-delay: 1s;
    `}

  ${({ reversed }) => {
    return (
      reversed &&
      css`
        flex-direction: row-reverse;
      `
    );
  }};
`;

export const ScoreResultGroup = styled.div`
  background-color: ${({ color }) => color};
  padding: 1rem;
`;

ScoreResultGroup.defaultProps = {
  color: '#333',
};

export const ScoreResultGroupHeader = styled.h4`
  white-space: nowrap;
  font-weight: normal;
  font-size: 2em;
  margin: 0;
`;

export const Score = styled.div`
  font-size: 3em;
  margin-top: 1rem;
  transform: scale(1);

  ${({ iterationInterval }) => {
    return (
      iterationInterval &&
      css`
        transition: transform ${Math.floor(iterationInterval / 4)}ms ease-out;
      `
    );
  }}
  ${({ transitioning }) => {
    return (
      transitioning &&
      css`
        transform: scale(1.75);
      `
    );
  }}
`;
