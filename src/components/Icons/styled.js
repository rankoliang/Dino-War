import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IconLink = styled(Link)`
  color: ${({ color }) => color || 'var(--red)'};
  filter: drop-shadow(1px 1px 1px #000);
  fill-rule: #fff;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1em;

  &:hover {
    svg {
      transition: transform 0.2s;
      transform: scale(1.2);
    }
  }
`;

export const RulesBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  filter: drop-shadow(1px 1px 1px #000);
  fill-rule: #fff;
  color: var(--red);
  transition: all 0.2s;

  &:hover {
    svg {
      transition: transform 0.2s;
      transform: scale(1.2);
    }
  }
`;

export const AttributionBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  filter: drop-shadow(1px 1px 1px #000);
  fill-rule: #fff;
  color: var(--red);
  transition: all 0.2s;

  &:hover {
    svg {
      transition: transform 0.2s;
      transform: scale(1.2);
    }
  }
`;
