import styled, { css } from 'styled-components';

export const App = styled.div`
  text-align: center;
  height: 100vh;
  ${({ background }) =>
    background &&
    css`
      background-image: url(\"data:image/svg+xml;utf8,${background}\");
      background-size: cover;
      min-height: 100%;
    `}
`;

export const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(4px);
  height: 100%;
  .title {
    display: block;
    width: 100%;
    background: var(--blue);
    color: #fff;
    font-size: calc(2em + 13vmin);
    cursor: default;
    letter-spacing: 2px;
    padding-top: 2em;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    box-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    margin-bottom: 1.5em;
  }
`;

export const AppLink = styled.a`
  color: #fff;
  font-size: calc(1em + 5vmin);
  text-decoration: none;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
  box-shadow: 2px 2px 4px #000;
  background: var(--red);
  padding: 1em 0.5em 0;
  border-radius: 5px;
  margin-bottom: 1em;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const AppExtras = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 3em;
`;