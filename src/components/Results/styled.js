import styled from 'styled-components';

export const Result = styled.div`
  z-index: 5;
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
  h1 {
    font-weight: normal;
    margin: 0.5em auto 1em;
    text-align: center;
    cursor: default;
  }
  #resultScore {
    display: block;
    width: 100%;
    font-size: calc(0.5em + 3vmin);
    text-align: center;
    margin-bottom: 1em;
  }
  div {
    width: 80%;
    font-size: calc(0.5em + 5vmin);
    margin: 0 auto 0.5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .resultsTop {
    font-size: calc(0.5em + 8vmin);
  }
  .resultsBtm {
    font-size: 1em;
    button, a {
      color: #fff;
    }
  }
`;

export const NextLevelIcon = styled.a`
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

export const RetryIcon = styled(NextLevelIcon).attrs({
  as: "button"
})`
  background: transparent;
  border: none;
  outline: none;
  font-size: calc(0.5em + 5vmin);
  cursor: pointer;
`;