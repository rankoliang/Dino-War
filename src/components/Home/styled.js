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
  font-size: calc(10px + 5vmin);
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  background: var(--red);
  padding: 12px 12px 3px;
  border-radius: 5px;
  margin-bottom: 15px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const AppIcon = styled.a`
  color: var(--red);
  font-size: calc(10px + 6vmin);
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.3));
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const AppExtras = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  margin-top: 50px;
  & ${AppIcon}:nth-child(2) {
    display: block;
    position: relative;
    top: 20px;
  }
`;

export const Rule = styled.div`
  display: none;
  z-index: 10;
`;