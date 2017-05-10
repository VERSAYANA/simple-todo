import { connect } from 'react-redux';
import Todoes from './Todoes';

const listTodos = (todos, title) => {
  return todos.filter(x => x.list === title || title === 'All');
};
const fTodos = (todos, filter) => {
  if (filter) {
    return [
      ...todos.filter(x => !x.completed),
      ...todos.filter(x => x.completed)
    ];
  } else return todos.filter(x => !x.completed);
};

const mapStateToProps = (state, ownProps) => ({
  id: state.id,
  todoes: fTodos(listTodos(state.todos, ownProps.title), state.filter),
  filter: state.filter,
	list: ownProps.title
});

const mapDispatchToProps = {
  toggleFilter: () => ({
    type: 'TOGGLE_FILTER'
  }),
  addTodo: (text, list, id) => ({
    type: 'ADD_TODO',
    text,
    list,
    id
  }),
  complete: id => ({
    type: 'COMPLETE_TODO',
    id
  }),
  additionalNote: (note, id) => ({
    type: 'ADDITIONAL_NOTE',
    note,
    id
  }),
  textTodo: (text, id) => ({
    type: 'TEXT_TODO',
    text,
    id
  }),
  editMode: id => ({
    type: 'TODO_EDIT_MODE',
    id
  }),
  deleteTodo: id => ({
    type: 'DELETE_TODO',
    id
  }),
  textMode: id => ({
    type: 'TODO_TEXT_MODE',
    id
  }),
  dateTodo: (date, id) => ({
    type: 'TODO_DATE',
    date,
    id
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Todoes);
