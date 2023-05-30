import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  plyload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
