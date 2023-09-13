const initialState = { selectedMovie: null };

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_MOVIE":
      return { ...state, selectedMovie: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
