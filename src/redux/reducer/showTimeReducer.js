const initialState = { selectedShowTime: null };
const showTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_SHOW_TIME":
      return { ...state, selectedShowTime: action.payload };
    default:
      return state;
  }
};
export default showTimeReducer;
