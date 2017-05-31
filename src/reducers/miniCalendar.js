const miniCalendar = (
  state = {
    start: -3,
    end: 3
  },
  action
) => {
  if (action.type === 'MINICAL') {
    return {
			start: action.start,
			end: action.end,
		}
  }
  return state;
};

export default miniCalendar;
