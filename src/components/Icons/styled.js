import styled from 'styled-components';

export const IconLink = styled.a`
  color: var(--red);
  font-size: calc(1em + 8vmin);
  filter: drop-shadow(1px 1px 1px #000);
  fill-rule: #fff;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
  .music {
    position: fixed;
    top: 5px;
    right: 5px;
  }
`;