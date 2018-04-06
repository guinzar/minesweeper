import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';
import board from './reducers/boardReducer.js';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    board
  }),
  applyMiddleware(thunk, middleware)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
