import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const ReducerAuth = (state = initialState, action) => {
  const { type, plyload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, isLoggedIn: false };

    case REGISTER_FAIL:
      return { ...state, isLoggedIn: false };

    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, user: plyload.user };

    case LOGIN_FAIL:
      return { ...state, isLoggedIn: false, user: null };

    case LOGOUT:
      return { ...state, isLoggedIn: false, user: null };

    default:
      return state;
  }
};

export default ReducerAuth;