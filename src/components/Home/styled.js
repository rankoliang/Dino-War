import styled from 'styled-components';

export const App = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  & p {
    color: white;
    font-size: calc(10px + 15vmin);
    cursor: default;
    letter-spacing: 2px;
  }
`;

export const AppLink = styled.a`
  color: #282c34;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 15px;
`;
