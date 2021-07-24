import styled from 'styled-components';

export const TeamNames = styled.div`
  width: 100%;
  display: flex;
`;

export const TeamName = styled.h2`
  flex: 1;
  margin: 0;
  padding: 1rem 0;
  color: white;
  background: ${({ background }) => background || 'white'};
  text-align: center;
  font-size: 3em;
  font-weight: normal;
`;

export const Counters = styled.div`
  display: flex;
  justify-content: space-between;
`;
