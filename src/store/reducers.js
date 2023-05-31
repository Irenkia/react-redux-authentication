import { combineReducers } from "redux";
import ReducerAuth from "./auth/reducer-auth";
import ReducerMessage from "./message/reducer-message";

export default combineReducers({
  ReducerAuth,
  ReducerMessage,
});
