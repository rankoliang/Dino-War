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
  font-size: calc(10px + 2vmin);
  & .title {
    display: block;
    width: 100%;
    background: var(--blue);
    color: #fff;
    font-size: calc(10px + 15vmin);
    cursor: default;
    letter-spacing: 2px;
    padding-top: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    box-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    margin-bottom: 25px;
  }
`;

export const AppLink = styled.a`
  color: #fff;
  font-size: calc(10px + 6vmin);
  text-decoration: none;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
  box-shadow: 2px 2px 4px #000;
  background: var(--red);
  padding: 14px 14px 0px;
  border-radius: 5px;
  margin-bottom: 15px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const AppIcon = styled.a`
  color: var(--red);
  font-size: calc(10px + 8vmin);
  filter: drop-shadow(1px 1px 1px #000);
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const AppExtras = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin-top: 50px;
  & ${AppIcon}:nth-child(2) {
    display: block;
    position: relative;
    top: 20px;
  }
`;

export const Rule = styled.div`
  z-index: 10;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 5%;
  bottom: 5%;
  right: 5%;
  left: 5%;
  margin: auto;
  max-width: 80ch;
  border-radius: 25px;
  border: 2px outset var(--red);
  background: var(--red);
  color: #fff;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  padding: 20px;
  cursor: default;
  & h1 {
    font-family: 'Luckiest Guy', cursive;
    font-weight: normal;
    margin: 0;
    letter-spacing: 2px;
  }
  & h2 {
    font-family: 'Luckiest Guy', cursive;
    font-weight: normal;
    margin: 0;
    font-size: 25px;
    letter-spacing: 2px;
  }
  & .text {
    height: 90%;
    padding: 5px;
    text-align: left;
    font-size: 18px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    overflow-y: auto;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 40px;
    filter: drop-shadow(1px 1px 4px rgba(0,0,0,0.3));
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;