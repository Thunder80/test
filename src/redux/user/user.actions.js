import { SET_EMAIL, SET_LOGGED_IN, SET_NAME, SET_X } from "./user.types";

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const setX = (x) => {
  return {
    type: SET_X,
    payload: x,
  };
};

export const setLoggedIn = (loggedIn) => {
  return {
    type: SET_LOGGED_IN,
    payload: loggedIn,
  };
};
