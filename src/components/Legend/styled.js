import styled, { css } from 'styled-components';

export const LegendLabel = styled.h3`
  margin: 0;
  margin-top: 0.5em;
  text-align: center;
  font-weight: normal;
`;

export const Dino = styled.svg`
  width: 3em;
  height: 3em;
  transform: scaleX(-1);
`;

export const LegendGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  * {
    flex: 1;
  }

  span {
    text-align: center;
    font-size: 1.25em;
  }
`;

export const StyledLegend = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  background: ${({ color }) => color || 'black'};
  border-radius: 5px;
  padding: 0 1em;
  font-size: 2rem;

  ${({ reversed }) =>
    reversed &&
    css`
      ${LegendGroup} {
        flex-direction: row-reverse;
      }

      ${Dino} {
        transform: scaleX(1);
      }
    `}
`;
