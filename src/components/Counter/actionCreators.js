export const counterIncremented = (amount = 1) => {
  return {
    type: 'counter/incremented',
    payload: amount,
  };
};

export const counterDecremented = (amount = 1) => {
  return {
    type: 'counter/decremented',
    payload: amount,
  };
};

export const counterSet = (amount) => {
  return {
    type: 'counter/set',
    payload: amount,
  };
};
