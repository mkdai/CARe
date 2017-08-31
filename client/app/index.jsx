import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import CurrentAuth from "./reducers/authReducer.js";
import UserDashboard from "./components/userDashboard/UserDashboard.jsx";

const reducers = combineReducers({
  currentAuth: CurrentAuth
});

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
