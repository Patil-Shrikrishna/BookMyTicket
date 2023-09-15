import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import movieReducer from "./movieReducer";
import seatsReducer from "./seatsReducer";
import showTimeReducer from "./showTimeReducer";
import showDateReducer from "./showDateReducer";
import theatreReducer from "./theatreReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  movie: movieReducer,
  showTime: showTimeReducer,
  showDate: showDateReducer,
  seat: seatsReducer,
  theatre: theatreReducer,
});
export default rootReducer;
