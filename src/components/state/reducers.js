import tasks from "./tasks";
import { combineReducers } from "redux";

export const Reducers = {
	tasks: tasks.reducer
};

export default combineReducers(Reducers);
