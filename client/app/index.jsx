import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App.jsx";
import authReducer from "./reducers/authReducer.js";
import UserDashboard from "./containers/userDashboard/UserDashboard.jsx";
import currentUserReducer from "./reducers/currentUserReducer.js";
// import { persistStore, autoRehydrate } from "redux-persist";
// import { asyncSessionStorage } from "redux-persist/storages";

const reducers = combineReducers({
  currentAuth: authReducer,
  currentUser: currentUserReducer
});

const store = createStore(reducers /*, undefined, compose(autoRehydrate())*/);

//persistStore(store).purge();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
