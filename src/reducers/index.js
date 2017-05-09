import { combineReducers } from "redux";
import todos from "./todos";
import lists from "./lists";
import filter from "./filter";
import id from "./id";

const index = combineReducers({
  todos,
  lists,
  filter,
	id,
});

export default index;
