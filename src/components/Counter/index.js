import { useRef } from 'react';
import {
  StyledCounter,
  StyledRexIcon,
  CounterButton,
  CounterInputs,
  CounterLabel,
} from './styled';
import { ReactComponent as RexIcon } from '../../icons/dinosaur-rex.svg';
import { counterSet } from './actionCreators';

const Counter = ({
  store: [count, dispatch],
  color = 'black',
  reversed = false,
}) => {
  const inputRef = useRef();

  const handleChange = (event) => {
    dispatch(counterSet(event.target.value));
  };

  return (
    <div>
      <StyledCounter color={color} reversed={reversed}>
        <StyledRexIcon as={RexIcon} alt="tyrannosaurus rex icon" fill={color} />
        <input
          type="number"
          min="0"
          max="99"
          value={count}
          onChange={handleChange}
          ref={inputRef}
        />
        <CounterInputs>
          <CounterButton
            onClick={(event) => {
              inputRef.current.stepUp();
              event.currentTarget.blur();
            }}
          >
            +
          </CounterButton>
          <CounterButton
            onClick={(event) => {
              inputRef.current.stepDown();
              event.currentTarget.blur();
            }}
          >
            -
          </CounterButton>
        </CounterInputs>
      </StyledCounter>
      <CounterLabel>Count the score!</CounterLabel>
    </div>
  );
};

export default Counter;
