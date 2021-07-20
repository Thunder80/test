import { SET_EMAIL, SET_LOGGED_IN, SET_NAME, SET_X } from "./user.types";

const initialState = {
  name: "",
  email: "",
  x: 0,
  loggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_X:
      return {
        ...state,
        x: action.payload,
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};
