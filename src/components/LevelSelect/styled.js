import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const BackgroundStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ background }) =>
    background &&
    css`
      background-image: url(\"data:image/svg+xml;utf8,${background}\");
      background-size: cover;
      min-height: 100%;
    `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--red);
  border-radius: 5px;
  max-width: 80ch;
  padding: 0 0 3em;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;
export const ButtonNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

export const IconStyle = styled.div`
  color: #fff;
  display: inline-flex;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const AppLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    transform: scale(1.2);
  }
`;

export const DifficultySelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 1em;
`;

export const LeftSelection = styled.h2`
  letter-spacing: 2px;
  flex: 1;
  text-align: center;
  font-weight: normal;
  color: grey;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: all 0.2s;
`;
export const CurrentSelection = styled.h2`
  letter-spacing: 2px;
  width: 10em;
  text-align: center;
  font-weight: normal;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-size: 2em;
  transition: all 0.2s;
`;
export const RightSelection = styled.h2`
  letter-spacing: 2px;
  flex: 1;
  text-align: center;
  font-weight: normal;
  color: grey;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: all 0.2s;
`;

export const LevelContainer = styled.div`
  display: flex;
  padding: 1em 0.5em;
  background-color: var(--blue);
  overflow: auto;
`;

export const Card = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 10em;
  height: 10em;
  padding: 0.8em;
  margin: 0 0.5em 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CardLink = styled(Link)`
  position: absolute;
  z-index: 1;
  width: 10em;
  height: 10em;
  text-decoration: none;
`;

export const LevelTitle = styled.div`
  color: white;
  font-size: large;
  text-align: center;
  padding: 0.2em 0px 0.2em;
`;
