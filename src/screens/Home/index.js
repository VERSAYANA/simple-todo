import { connect } from "react-redux";
import Home from "./Home";
import {
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

const todayTodos = (todos, today) => {
  return todos.filter(x => x.date === today);
};

const focusedTodos = todos => {
  return todos.filter(x => x.focus);
};
const filteredTodos = (todos, filter) => {
  if (filter) {
    return [
      ...todos.filter(x => !x.completed),
      ...todos.filter(x => x.completed)
    ];
  } else return todos.filter(x => !x.completed);
};

const mapStateToProps = state => ({
  id: state.id,
  todayTodoes: filteredTodos(
    todayTodos(state.todos, state.today),
    state.filter
  ),
  focusTodoes: filteredTodos(focusedTodos(state.todos), state.filter),
  today: state.today
});

const mapDispatchToProps = {
  addTodo: (text, list, date, focus, id) =>
    addTodo(text, list, date, focus, id),
  complete: id => completeTodo(id),
  additionalNote: (note, id) => additionalNote(note, id),
  textTodo: (text, id) => textTodo(text, id),
  editMode: id => todoEditMode(id),
  deleteTodo: id => deleteTodo(id),
  textMode: id => todoTextMode(id),
  dateTodo: (date, id) => dateTodo(date, id),
  toggleFocus: id => toggleFocus(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
