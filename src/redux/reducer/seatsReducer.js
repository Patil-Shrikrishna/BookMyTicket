const initialState = { selectedSeats: null };

const seatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_SEATS":
      return { ...state, selectedSeats: action.payload };
    default:
      return state;
  }
};
export default seatsReducer;
