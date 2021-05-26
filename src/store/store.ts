import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/reducers';

const middlewares = [ReduxPromise];

export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);
