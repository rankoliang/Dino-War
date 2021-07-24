import styled from 'styled-components';

export const App = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  & p {
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
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  background: var(--red);
  padding: 10px 10px 5px;
  border-radius: 5px;
  margin-bottom: 15px;
  & nth-child(1) {
    color: green;
  }
`;
