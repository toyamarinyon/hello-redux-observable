import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer, { epic } from './modules/ping';

const epicMiddleware = createEpicMiddleware(epic);

export default createStore(reducer,
  applyMiddleware(epicMiddleware)
);
