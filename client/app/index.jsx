import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import LandingPage from './components/landingPage/LandingPage.jsx';

// const reducers = combineReducers({

// });

// const store = createStore(reducers);

render(
  <Provider>
    <LandingPage />
  </Provider>, document.getElementById('app')
)