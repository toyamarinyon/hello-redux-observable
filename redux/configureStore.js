import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer, { epic } from './modules/ping.js';

const epicMiddleware = createEpicMiddleware(epic);

export default createStore(reducer,
  applyMiddleware(epicMiddleware)
);
