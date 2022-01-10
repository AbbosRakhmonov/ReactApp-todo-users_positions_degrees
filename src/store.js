import { createStore } from "redux";
import { combineReducers } from "redux";
import UserReducer from "./Reducers/UserReducer/UserReducer";
import PositionReducer from "./Reducers/PositionReducer/PositionReducer";
import DegreeReducer from "./Reducers/DegreeReducer/DegreeReducer";
export default createStore(
  combineReducers({ UserReducer, PositionReducer, DegreeReducer })
);
