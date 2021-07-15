export const SET_USER = "SET_USER";

export const createUser = (user) => ({
  type: SET_USER,
  payload: user,
});
