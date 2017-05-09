const filter = (state = false, action) => {
  if (action.type === "TOGGLE_FILTER") {
    return state = !state;
  }
  return state;
};

export default filter;
