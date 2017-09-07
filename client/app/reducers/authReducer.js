export default function(state = { auth: {} }, action) {
  console.log(
    "ACTION: ",
    action.type,
    "STATE BEFORE ACTION: ",
    state,
    "PAYLOAD: ",
    action.payload
  );
  switch (action.type) {
    case "ADD_AUTH":
      state = Object.assign({}, state, {
        auth: action.payload
      });
      console.log("STATE AFTER ACTION: ", action.type, state);
      break;
  }
  return state;
}
