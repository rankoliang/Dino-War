import styled from 'styled-components';

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