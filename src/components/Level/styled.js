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
  font-size: 3rem;
  font-weight: normal;
`;

export const Counters = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainActionButton = styled.button`
  font-size: 2.5rem;
  font-family: inherit;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border: 0;
  background: #333;
  padding: 0.25em;
  color: white;
  transition: background-color 0.25s ease;

  &:hover,
  &:focus {
    outline: none;
    cursor: pointer;
    background: #222;
  }
`;

export const Legends = styled.div`
  position: relative;
  width: 100%;
  top: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 0 3em;
  padding-bottom: 5em;
`;

export const VerticalDivider = styled.div`
  border-left: 3px solid black;
  position: fixed;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
`

export const StyledLevel = styled.main`
  ${({ background }) =>
    background &&
    css`
      background-image: url("data:image/svg+xml;utf8,${background}");
      background-size: cover;
      min-height: 100%;
    `}
`;
