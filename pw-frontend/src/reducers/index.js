import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { biseylerReducer } from "./biseyler";

const rootReducer = combineReducers({
  auth: authReducer,
  biseyler: biseylerReducer,
});

export default rootReducer;
