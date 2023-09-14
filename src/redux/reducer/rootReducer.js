import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import movieReducer from "./movieReducer";
import showTimeReducer from "./showTimeReducer";
import seatsReducer from "./seatsReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  movie: movieReducer,
  showTime: showTimeReducer,
  seat: seatsReducer,
});
export default rootReducer;
