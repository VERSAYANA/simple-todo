import React from 'react';
import { connect } from 'react-redux';
import Lists from './Lists';

const getNumber = (todos, list) => {
  return todos.reduce(
    (num, x) => {
      return (list.title === x.list || list.title === "All") && !x.completed
        ? num + 1
        : num;
    },
    0
  );
};

const number = (todos, lists) => {
  return lists.map(x => ({
    ...x,
    count: getNumber(todos, x) || ''
  }))
}

const mapStateToProps = state => ({
  lists: number(state.todos, state.lists),
});
const mapDispatchToProps = {
  createList: title => ({
    type: "CREATE_LIST",
    title
  }),
  deleteList: title => ({
    type: "DELETE_LIST",
    title
  }),
	toggleEdit: title => ({
		type: "TOGGLE_EDIT_LIST",
		title
	}),
	toggleListTitle: title => ({
		type: "TOGGLE_LIST_TITLE",
		title
	}),
	submitEditList: (oldTitle, newTitle) => ({
		type: "SUBMIT_EDIT_LIST",
		oldTitle,
		newTitle,
	}),

};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
