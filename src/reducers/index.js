import { combineReducers } from "redux";
import todos from "./todos";
import lists from "./lists";
import filter from "./filter";
import id from "./id";
import today from "./today";
import miniCalendar from "./miniCalendar";

const index = combineReducers({
  todos,
  lists,
  filter,
	id,
	today,
	miniCalendar
});

export default index;
