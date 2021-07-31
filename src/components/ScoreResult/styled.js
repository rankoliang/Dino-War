import styled, { css } from 'styled-components';

export const StyledScoreResult = styled.div`
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
  margin: 1rem;
  color: white;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({ reversed }) => {
    return (
      reversed &&
      css`
        flex-direction: row-reverse;
      `
    );
  }}
`;

export const ScoreResultGroup = styled.div`
  background-color: ${({ color }) => color};
  padding: 1rem;
`;

ScoreResultGroup.defaultProps = {
  color: '#333',
};

export const ScoreResultGroupHeader = styled.h4`
  white-space: nowrap;
  font-weight: normal;
  font-size: 2em;
  margin: 0;
`;

export const Score = styled.div`
  font-size: 3em;
  margin-top: 1rem;
`;
