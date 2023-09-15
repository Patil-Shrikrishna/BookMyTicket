const initialState = { selectedShowDate: null };
const showDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_SHOW_DATE":
      return { ...state, selectedShowDate: action.payload };
    default:
      return state;
  }
};
export default showDateReducer;
