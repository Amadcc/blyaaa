import { combineReducers } from "redux";
import todos from "./ToDo";
import visibilityFilter from "./Filter";
import api from "./Api"

export default combineReducers({
  todos,
  visibilityFilter,
  api
});
