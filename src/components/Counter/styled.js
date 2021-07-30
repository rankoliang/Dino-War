import styled, { css } from 'styled-components';

export const CounterButton = styled.button`
  background: white;
  font-family: inherit;
  font-size: inherit;
  min-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.25em;
  border: 3px solid black;

  &:not(:last-child) {
    border-bottom: 0;
  }
`;

export const StyledRexIcon = styled.svg`
  width: 1.5em;
`;

export const CounterInputs = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CounterLabel = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0.5em 0;
`;

export const StyledCounter = styled.div`
  display: flex;
  font-size: 5em;
  height: 1.5em;
  ${CounterButton} {
    &:hover,
    &:focus {
      cursor: pointer;
      outline: none;
      color: white;
      background: ${({ color }) => color};
    }

    ${({ reversed }) =>
      reversed
        ? css`
            border-right: 0;
          `
        : css`
            border-left: 0;
          `}
  }

  ${({ reversed }) =>
    reversed &&
    css`
      flex-direction: row-reverse;

      ${StyledRexIcon} {
        transform: scaleX(-1);
      }
    `}

  & > input {
    font-size: inherit;
    font-family: inherit;
    text-align: center;
    width: 3ch;
    padding: 0.25em 0 0 0;
    margin: 0;
    border: 3px solid black;
    line-height: 1.1;
    &:focus {
      outline-color: ${({ color }) => color};
    }

    &::-webkit-out-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;
