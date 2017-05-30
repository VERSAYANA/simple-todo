import React from 'react';
import { connect } from 'react-redux';
import _2Weeks from './2Weeks';

const cal = (today, todos, week) => {
  const date = new Date(today);
  date.setDate(date.getDate() + (week - date.getDay()));
  let array = [];
  for (i = 0; i <= 6; i++) {
    console.log(date.toDateString());
    array.push(todos.filter(t => t.date === date.toDateString()));
    date.setDate(date.getDate() + 1);
  }
  return array;
};

const mapStateToProps = state => ({
  today: state.today,
  thisWeek: cal(state.today, state.todos, 0),
  nextWeek: cal(state.today, state.todos, 7)
});

const mapDispatchToProps = {
  dateToday: today => ({
    type: 'TODAY',
    today
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

export default connect(mapStateToProps, mapDispatchToProps)(_2Weeks);
