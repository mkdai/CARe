import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// const reducers = combineReducers({

// });

// const store = createStore(reducers);

render(
  <Provider>
    <div>React, is cool sometimes, sometimes</div>
  </Provider>, document.getElementById('app')
)