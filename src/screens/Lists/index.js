import React from "react";
import { connect } from "react-redux";
import Lists from "./Lists";

import {
  createList,
  deleteList,
  toggleEdit,
  toggleListTitle,
  submitEditList
} from "../../actionCreators";

const getNumber = (todos, list) => {
  return todos.reduce((num, x) => {
    return (list.title === x.list || list.title === "All") && !x.completed
      ? num + 1
      : num;
  }, 0);
};

const number = (todos, lists) => {
  return lists.map(x => ({
    ...x,
    count: getNumber(todos, x) || ""
  }));
};

const mapStateToProps = state => ({
  lists: number(state.todos, state.lists)
});
const mapDispatchToProps = {
  createList: title => createList(title),
  deleteList: title => deleteList(title),
  toggleEdit: title => toggleEdit(title),
  toggleListTitle: title => toggleListTitle(title),
  submitEditList: (oldTitle, newTitle) => submitEditList(oldTitle, newTitle)
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
