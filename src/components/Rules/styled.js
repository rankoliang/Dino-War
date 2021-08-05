import styled from 'styled-components';

export const Rule = styled.div`
  z-index: 10;
  position: fixed;
  top: 5%;
  bottom: 5%;
  right: 5%;
  left: 5%;
  margin: auto;
  max-width: 80ch;
  max-height: 600px;
  border-radius: 25px;
  border: 2px outset #333;
  background: #333;
  color: #fff;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  padding: 20px;
  cursor: default;
  h1, h2 {
    color: var(--red);
    font-weight: normal;
    letter-spacing: 2px;
  }
  h1 {
    margin: 0;
    text-align: center;
  }
  h2 {
    margin: 1.5em 0 -0.5em;
    font-size: 1.5em;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
  }
  .text {
    text-align: justify;
    height: 90%;
    padding: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    overflow-y: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
  font-size: 2.5em;
  filter: drop-shadow(1px 1px 4px rgba(0,0,0,0.3));
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;