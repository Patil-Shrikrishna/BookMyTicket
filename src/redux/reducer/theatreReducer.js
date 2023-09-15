const initialState = { selectedTheatre: null };
const theatreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_THEATRE":
      return { ...state, selectedTheatre: action.payload };
    default:
      return state;
  }
};
export default theatreReducer;
