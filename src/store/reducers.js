import { combineReducers } from "redux";
import reducerAuth from "./auth/reducer-auth";
import reducerMessage from "./message/reducer-message";

export default combineReducers({
  reducerAuth,
  reducerMessage,
});
