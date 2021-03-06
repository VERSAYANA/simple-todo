import { connect } from 'react-redux';
import Todoes from './Todoes';
import {
  addTodo,
  completeTodo,
  additionalNote,
  textTodo,
  todoEditMode,
  deleteTodo,
  todoTextMode,
  dateTodo,
  toggleFocus,
} from "../../actionCreators";

const listTodos = (todos, title) => {
  return todos.filter(x => x.list === title || title === 'All');
};
const filteredTodos = (todos, filter) => {
  if (filter) {
    return [
      ...todos.filter(x => !x.completed),
      ...todos.filter(x => x.completed)
    ];
  } else return todos.filter(x => !x.completed);
};

const mapStateToProps = (state, ownProps) => ({
  id: state.id,
  todoes: filteredTodos(listTodos(state.todos, ownProps.title), state.filter),
	list: ownProps.title
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
  toggleFocus: (id) => toggleFocus(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Todoes);
