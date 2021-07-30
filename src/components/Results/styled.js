import styled from 'styled-components';

export const Result = styled.div`
  z-index: 10;
  display: block;
  position: fixed;
  top: 20%;
  right: 5%;
  left: 5%;
  margin: auto;
  max-width: 40ch;
  border-radius: 25px;
  border: 2px outset var(--red);
  background: var(--red);
  color: #fff;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  & h1 {
    font-weight: normal;
    margin: 10px auto 40px;
  }
  & #resultScore {
    display: block;
    width: 100%;
    font-size: calc(10px + 3vmin);
    text-align: center;
    margin-bottom: 40px;
  }
  & div {
    width: 80%;
    font-size: calc(10px + 5vmin);
    margin: 0 auto 20px;
    display: flex;
    flex-direction: row;
  }
  & .resultsTop {
    font-size: calc(10px + 8vmin);
  }
`;

export const ResultIcon = styled.a`
  color: #fff;
  display: inline-flex;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.4));
  margin: auto;
  width: fit-content;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;