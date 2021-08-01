import styled, { css } from 'styled-components';

export const TeamNames = styled.div`
  width: 100%;
  display: flex;
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

export const Counters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 10rem;

  ${({ counting }) =>
    counting &&
    css`
      justify-content: space-around;
    `}

  ${({ transitioning }) =>
    transitioning &&
    css`
      z-index: 0;
      transform: translateY(-100%);
      pointer-events: none;
    `}
`;

export const MainActionButton = styled.button`
  font-size: 2.5em;
  font-family: inherit;
  width: 100%;
  border: 0;
  background: #333;
  padding: 0.25em;
  color: white;
  transition: background-color 0.25s ease;
  z-index: 0;

  &:hover,
  &:focus {
    outline: none;
    cursor: pointer;
    background: #222;
  }
`;

export const Battlefield = styled.div`
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

export const TeamBoard = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-content: center;
  margin: 0 2em;
  margin-bottom: 3em;
  ${({ reversed }) =>
    reversed &&
    css`
      transform: scaleX(-1);
    `}
`;

export const Dino = styled.svg`
  width: 6em;
  height: 6em;
  margin: 0.5em;

  circle[fill='#edebdc'] {
    display: none;
  }
`;

export const VerticalDivider = styled.div`
  border-left: 3px solid black;
  position: fixed;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
`;

export const StyledLevel = styled.main`
  min-width: 61.5em;
  display: flex;
  flex-direction: column;
  ${({ background }) =>
    background &&
    css`
      background-image: url(\"data:image/svg+xml;utf8,${background}\");
      background-size: cover;
      min-height: 100%;
    `}
`;
