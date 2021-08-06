import styled from 'styled-components';
import { Link } from "react-router-dom";

export const IconLink = styled(Link)`
  color: var(--red);
  filter: drop-shadow(1px 1px 1px #000);
  fill-rule: #fff;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1em;

  &:hover {
    transform: scale(1.2);
  }
`;

export const RulesLink = styled(IconLink).attrs({
  as: "button"
})`
  background: transparent;
  border: none;
  outline: none;
`;
