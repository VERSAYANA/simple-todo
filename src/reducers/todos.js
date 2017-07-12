const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        text: action.text,
        completed: false,
        list: action.list,
        id: action.id,
				date: action.date,
        focus: action.focus
      };

    case "COMPLETE_TODO":
      if (state.id === action.id) {
        return {
          ...state,
          completed: !state.completed
        };
      }

		case "SUBMIT_EDIT_LIST":
			if(state.list === action.oldTitle) {
				return {
					...state,
					list: action.newTitle
				}
			}

		case "ADDITIONAL_NOTE":
			if (state.id === action.id) {
				return {
					...state,
					note: action.note
				}
			}

		case "TEXT_TODO":
			if (state.id === action.id) {
				return {
					...state,
					text: action.text
				};
			}

		case "TODO_EDIT_MODE":
			if (state.id === action.id) {
				return {
					...state,
					editMode: !state.editMode
				}
			} else {
					return {
						...state,
						editMode: false,
					}
				}


		case "TODO_TEXT_MODE":
			if (state.id === action.id) {
				return {
					...state,
					editText: !state.editText
				}
			}

		case "TODO_DATE":
			if (state.id === action.id) {
				return {
					...state,
					date: action.date,
				}
			}

		case "TODO_TIME":
			if (state.id === action.id) {
				return {
					...state,
					time: {
						hour: action.hour,
						minute: action.minute,
					}
				}
			}

		case "CHANGE_LIST":
			if (state.id === action.id) {
				return {
					...state,
					list: action.list
				}
			}

		case "TOGGLE_FOCUS":
			if (state.id === action.id) {
				return {
					...state,
					focus: !state.focus
				}
			}

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
			if(action.text) {
	      return [...state, todo(undefined, action)];
			} else return state;

    case "COMPLETE_TODO":
      return state.map(t => todo(t, action));

    case "DELETE_LIST":
      return state.filter(x => x.list !== action.title);

		case "SUBMIT_EDIT_LIST":
			return state.map(t => todo(t, action));

		case "CLEAR_COMPLETED":
			// if(action.list === 'All') {
				return state.filter(x => !x.completed)
			// }
			// return state.filter(x => x.list === action.list && !x.completed)

		case "ADDITIONAL_NOTE":
			return state.map(t => todo(t, action));

		case "DELETE_TODO":
			return state.filter(t => t.id !== action.id);

		case "TEXT_TODO":
			return state.map(t => todo(t, action));

		case "TODO_EDIT_MODE":
			return state.map(t => todo(t, action));

		case "TODO_TEXT_MODE":
			return state.map(t => todo(t, action));

		case "TODO_DATE":
			return state.map(t => todo(t, action));

		case "TODO_TIME":
			return state.map(t => todo(t, action));

		case "CHANGE_LIST":
			return state.map(t => todo(t, action));

    case "TOGGLE_FOCUS":
      return state.map(t => todo(t, action));





    default:
      return state;

  }
};

export default todos;
