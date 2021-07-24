const minCount = 0;
const maxCount = 99;

const reducer = (state, action) => {
  switch (action.type) {
    case 'counter/incremented': {
      const result = state + action.payload;
      return result <= maxCount ? result : state;
    }
    case 'counter/decremented': {
      const result = state - action.payload;
      return result >= minCount ? result : state;
    }
    case 'counter/set': {
      if (action.payload <= maxCount && action.payload >= minCount) {
        return action.payload;
      } else {
        return state;
      }
    }
    default:
      throw new Error();
  }
};

export default reducer;
