import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App.jsx';

// const reducers = combineReducers({

// });

// const store = createStore(reducers);

render(
  <Provider>
    <App />
  </Provider>, document.getElementById('app')
)