import { SET_USER } from "../actions";

const userInitialState = {
  token: null,
};

export const userReducer = (state = userInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return { ...payload };
    default:
      return state;
  }
};
