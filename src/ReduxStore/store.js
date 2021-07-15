import { createStore, combineReducers } from "redux";
import { userReducer } from "./Reducers/MainReducer";

const reducers = combineReducers({
  user: userReducer,
});

export default createStore(reducers);
