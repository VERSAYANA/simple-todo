import { combineReducers } from "redux";
import todos from "./todos";
import lists from "./lists";
import filter from "./filter";
import id from "./id";
import today from "./today";

const index = combineReducers({
  todos,
  lists,
  filter,
	id,
	today
});

export default index;
