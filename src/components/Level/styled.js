import styled, { css, keyframes } from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  z-index: 1;
  position: relative;
`;

export const TeamName = styled.h2`
  flex: 1;
  margin: 0;
  padding: 1rem 0;
  color: white;
  background: ${({ background }) => background || 'white'};
  text-align: center;
  font-size: 3em;
  font-weight: normal;
`;

export const StyledCounters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 10rem;
  transition: transform 0.5s ease-out;

  ${({ phase }) => {
    switch (phase) {
      case 'results':
      case 'counting':
        return css`
          justify-content: space-around;
        `;
      case 'transitioning':
        return css`
          z-index: 0;
          transform: translateY(-100%);
          pointer-events: none;
        `;
      default:
    }
  }}}
`;

const pulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 0.75em var(--red);
  }
  70% {
    text-shadow: 0 0 0.75em var(--blue);
  }
`;

export const StyledMainActionButton = styled.button`
  font-size: 2.5em;
  font-family: inherit;
  width: 100%;
  border: 0;
  background: #333;
  padding: 0.25em;
  color: white;
  transition: color 0.5s, background-color 0.75s ease, transform 0.5s ease-out,
    font-size 0.75s;
  z-index: 0;

  ${({ phase, color }) => {
    switch (phase) {
      case 'transitioning':
        return css`
          transform: translateY(100%);
        `;
      case 'counting':
        return css`
          animation-duration: 3s;
          animation-name: ${pulse};
          animation-iteration-count: infinite;
        `;
      case 'results':
        return css`
          background-color: ${color ? color : '#333'};
          font-size: 4em;
        `;
      default:
        return css`
          &:hover,
          &:focus {
            outline: none;
            cursor: pointer;
            background: #222;
          }
        `;
    }
  }}
`;

export const StyledBattlefield = styled.div`
  width: 100%;
  flex: 1;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  z-index: 0;
`;

const pointChange = keyframes`
  0% {
    opacity: 0.8;
    transform: scaleX(-1) translate(50%, -50%);
  }

  100% {
    opacity: 0;
    transform: scaleX(-1) translate(50%, -150%) scale(0.7);
  }
`;

export const Points = styled.span`
  position: absolute;
  cursor: inherit;
  font-size: 4em;
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s ease-in;
  animation-duration: 1s;
  animation-name: ${pointChange};
`;

export const PointsWrapper = styled.div`
  position: relative;
  bottom: 50%;
`;

export const DinoIcon = styled.svg`
  width: 6em;
  height: 6em;
  margin: 0.5em;

  circle[fill='#edebdc'] {
    display: none;
  }
`;

export const DinoWrapper = styled.div`
  transition: opacity 0.5s, transform 0.2s;

  &:hover {
    opacity: 0.5;
  }
`;

export const TeamBoard = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-content: center;
  padding: 0 1em;
  padding-bottom: 3em;
  border-right: 2px solid rgba(0, 0, 0, 0.4);

  ${({ reversed }) =>
    reversed
      ? css`
          transform: scaleX(-1);

          ${PointsWrapper} {
            left: 50%;
          }
        `
      : css`
          ${PointsWrapper} {
            transform: scaleX(-1);
            right: 50%;
          }
        `}
`;

export const StyledLevel = styled.main`
  min-width: 61.5em;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ background }) =>
    background &&
    css`
      background-image: url(\"data:image/svg+xml;utf8,${background}\");
      background-size: cover;
      min-height: 100%;
    `}
`;

export const Extras = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  padding: 6px;
  padding-bottom: 0;
  background: #333;
  border-radius: 10px;

  * {
    margin: 2px;
  }
`;

export const LevelIndicator = styled.div`
  position: absolute;
  left: 50%;
  bottom: -25%;
  transform: translate(-50%, 100%);
  color: white;
  background: rgba(51, 51, 51, 0.85);
  padding: 0.5em;
  padding-bottom: 0.2em;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.15em;
`;

export const Difficulty = styled.h3`
  margin: 0;
  font-weight: normal;
`;

export const Stage = styled.h4`
  margin: 0;
  font-weight: normal;
`;
