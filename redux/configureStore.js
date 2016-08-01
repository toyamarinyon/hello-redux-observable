import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { pingEpic, pingReducer } from './modules/ping.js';

const epicMiddleware = createEpicMiddleware(pingEpic);

export default createStore(pingReducer,
  applyMiddleware(epicMiddleware)
);
