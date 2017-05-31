import React from 'react';
import { connect } from 'react-redux';
import MiniCalendar from './MiniCalendar';

const cal = (today, todos, range) => {
	const date = new Date(today);
	const rangeL = range.end - range.start
  date.setDate(date.getDate() + range.start);
  let array = [];
  for (i = 0; i <= rangeL; i++) {
    console.log(date.toDateString());
    array.push(todos.filter(t => t.date === date.toDateString()));
    date.setDate(date.getDate() + 1);
  }
  return array;
};



const mapStateToProps = state => ({
	id: state.id,
  today: state.today,
	start: state.miniCalendar.start,
	miniCalendar: cal(state.today, state.todos, state.miniCalendar)
});

const mapDispatchToProps = {
  dateToday: today => ({
    type: 'TODAY',
    today
  }),
  addTodo: (text, list, date, id) => ({
    type: 'ADD_TODO',
    text,
    list,
		date,
    id,
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

export default connect(mapStateToProps, mapDispatchToProps)(MiniCalendar);
