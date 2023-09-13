import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  movie: movieReducer,
});
export default rootReducer;
