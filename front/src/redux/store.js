import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducer.js';

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);
/*import {composeWithDevTools}from 'redux-devtools-extension'

*/