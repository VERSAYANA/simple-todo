const id = (state = false, action) => {
  if (action.type === "TODAY") {
    return state + 1;
  }
  return state;
};

export default id;
