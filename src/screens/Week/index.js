import React from "react";
import { connect } from "react-redux";
import Week from "./Week";
import {
  dateToday,
  addTodo,
  completeTodo,
  additionalNote,
  textTodo,
  todoEditMode,
  deleteTodo,
  todoTextMode,
  dateTodo,
  toggleFocus
} from "../../actionCreators";

const cal = (today, todos) => {
  const date = new Date(today);
  const start = date.getDay();
  date.setDate(date.getDate() - start);
  let array = [];
  for (i = 0; i <= 6; i++) {
    array.push(todos.filter(t => t.date === date.toDateString()));
    console.log(date.toDateString());
    date.setDate(date.getDate() + 1);
  }
  return array;
};

const compCal = (todos, filter) => {
  if (filter) {
    return [
      ...todos.filter(x => !x.completed),
      ...todos.filter(x => x.completed)
    ];
  } else return todos.filter(x => !x.completed);
};

const mapStateToProps = state => ({
  id: state.id,
  today: state.today,
  week: cal(
    state.today,
    compCal(state.todos, state.filter),
  )
});

const mapDispatchToProps = {
  dateToday: today => dateToday(today),
  addTodo: (text, list, date, focus, id) =>
    addTodo(text, list, date, focus, id),
  complete: id => completeTodo(id),
  additionalNote: (note, id) => additionalNote(note, id),
  textTodo: (text, id) => textTodo(text, id),
  editMode: id => todoEditMode(id),
  deleteTodo: id => deleteTodo(id),
  textMode: id => todoTextMode(id),
  dateTodo: (date, id) => dateTodo(date, id),
  toggleFocus: (id) => toggleFocus(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Week);
