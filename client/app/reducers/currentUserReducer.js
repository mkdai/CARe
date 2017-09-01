export default function(state = { currentUser: {} }, action) {
  switch (action.type) {
    case "ADD_USER":
      state = Object.assign({}, state, {
        currentUser: action.payload
      });
      break;
  }
  return state;
}
