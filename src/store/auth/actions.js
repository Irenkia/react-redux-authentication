import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import { SET_MESSAGE } from "../message/types";

import authService from "../../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
  return authService.register(username, email, password).then(
    (respons) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        plyload: respons.data.message,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.respons && error.respons.data && error.respons.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        plyload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return authService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        plyload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.respons && error.respons.data && error.respons.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        plyload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  authService.logout();

  dispatch({
    type: LOGOUT,
  });
};
