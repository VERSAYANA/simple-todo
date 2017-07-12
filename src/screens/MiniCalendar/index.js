import React from "react";
import { connect } from "react-redux";
import MiniCalendar from "./MiniCalendar";
import {
  dateToday,
  addTodo,
  completeTodo,
  additionalNote,
  textTodo,
  todoEditMode,
  deleteTodo,
  todoTextMode,
  dateTodo
} from "../../actionCreators";

const cal = (today, todos, range) => {
  const date = new Date(today);
  const rangeL = range.end - range.start;
  date.setDate(date.getDate() + range.start);
  let array = [];
  for (i = 0; i <= rangeL; i++) {
    array.push(todos.filter(t => t.date === date.toDateString()));
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
  start: state.miniCalendar.start,
  miniCalendar: cal(
    state.today,
    compCal(state.todos, state.filter),
    state.miniCalendar
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
  dateTodo: (date, id) => dateTodo(date, id)
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCalendar);
