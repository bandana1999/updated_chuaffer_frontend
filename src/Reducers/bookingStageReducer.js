const initialState = 1;

const bookingStageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_STAGE":
      return (state = state + 1);
    case "PREVIOUS_STAGE":
      return (state = state - 1);
    case "INITIAL_STAGE":
      return (state = 0);
    default:
      return state;
  }
};

export default bookingStageReducer;
