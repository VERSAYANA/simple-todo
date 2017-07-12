function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

const CREATE_LIST = "CREATE_LIST";
const DELETE_LIST = "DELETE_LIST";
const TOGGLE_EDIT_LIST = "TOGGLE_EDIT_LIST";
const TOGGLE_LIST_TITLE = "TOGGLE_LIST_TITLE";
const SUBMIT_EDIT_LIST = "SUBMIT_EDIT_LIST";

const TODAY = "TODAY";

const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const ADDITIONAL_NOTE = "ADDITIONAL_NOTE";
const CHANGE_LIST = "CHANGE_LIST";
const TEXT_TODO = "TEXT_TODO";
const TODO_EDIT_MODE = "TODO_EDIT_MODE";
const DELETE_TODO = "DELETE_TODO";
const TODO_TEXT_MODE = "TODO_TEXT_MODE";
const TODO_DATE = "TODO_DATE";
const TOGGLE_COMPLETED_FILTER = "TOGGLE_COMPLETED_FILTER";
const CLEAR_COMPLETED = "CLEAR_COMPLETED";
const MINICAL = "MINICAL";

export const createList = makeActionCreator(CREATE_LIST, "title");
export const deleteList = makeActionCreator(DELETE_LIST, "title");
export const toggleEdit = makeActionCreator(TOGGLE_EDIT_LIST, "title");
export const toggleListTitle = makeActionCreator(TOGGLE_LIST_TITLE, "title");
export const submitEditList = makeActionCreator(
  SUBMIT_EDIT_LIST,
  "oldTitle",
  "newTitle"
);
export const additionalNote = makeActionCreator(ADDITIONAL_NOTE, "note", "id");
export const selectList = makeActionCreator(CHANGE_LIST, "list", "id");
export const dateToday = makeActionCreator(TODAY, "today");
export const addTodo = makeActionCreator(
  ADD_TODO,
  "text",
  "list",
  "date",
  "focus",
  "id"
);
export const completeTodo = makeActionCreator(COMPLETE_TODO, "id");
export const textTodo = makeActionCreator(TEXT_TODO, "text", "id");
export const todoEditMode = makeActionCreator(TODO_EDIT_MODE, "id");
export const deleteTodo = makeActionCreator(DELETE_TODO, "id");
export const todoTextMode = makeActionCreator(TODO_TEXT_MODE, "id");
export const dateTodo = makeActionCreator(TODO_DATE, "date", "id");
export const toggleCompletedFilter = makeActionCreator(TOGGLE_COMPLETED_FILTER);
export const clearCompleted = makeActionCreator(CLEAR_COMPLETED);
export const miniCal = makeActionCreator(MINICAL, "start", "end");
