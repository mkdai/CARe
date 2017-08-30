export default function(state = { auth: {} }, action) {
  switch (action.type) {
    case "ADD_AUTH":
      state = Object.assign({}, state, {
        auth: action.payload
      });
      break;
  }
  return state;
}
