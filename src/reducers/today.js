const today = (state = false, action) => {
  if (action.type === "TODAY") {
    return action.today;
  }
  return state;
};

export default today;
