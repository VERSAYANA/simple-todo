import { firstLists } from "./firstState";

const list = (state, action) => {
  switch (action.type) {
    case "CREATE_LIST":
      return {
        title: action.title,
				edit: false,
				longPress: false,

      };

		case "TOGGLE_EDIT_LIST":
			if (state.title === action.title) {
				return {
					...state,
					edit: !state.edit
				}
			} else {
					return {
						...state,
						edit: false,
					}
				}
		case "TOGGLE_LIST_TITLE":
		if (state.title === action.title) {
			return {
				...state,
				editTitle: !state.editTitle
			}
		}
		case "SUBMIT_EDIT_LIST":
		if (state.title === action.oldTitle) {
			return {
				...state,
				title: action.newTitle
			}
		}
    default:
      return state;
  }
};
const lists = (state = firstLists, action) => {
	switch (action.type) {
	case "CREATE_LIST":
		if (!state.find(s => s.title === action.title)) {
			if(action.title) {
				return [...state, list(undefined, action)];
			} else return state;
		} else
			return state;
	case "TOGGLE_EDIT_LIST":
		return state.map(l => list(l, action));
	case "TOGGLE_LIST_TITLE":
	return state.map(l => list(l, action));
	case "DELETE_LIST":
		return state.filter(s => s.title !== action.title);
	case "SUBMIT_EDIT_LIST":
		if (!state.find(s => s.title === action.newTitle)) {
		return state.map(l => list(l, action));
	} else return state;
	default:
		return state;
}
};
export default lists;
