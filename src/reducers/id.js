const id = (state = 0, action) => {
  if (action.type === "ADD_TODO") {
    return state + 1;
  }
  return state;
};

export default id;
