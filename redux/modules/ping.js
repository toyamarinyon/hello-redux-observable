import 'rxjs';

// Actions
const PING = 'hello-redux-observable/ping/PING';
const PONG = 'hello-redux-observable/ping/PONG';

// Reducer
export default function reducer (state = { isPinging: false }, action) {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
}

// Epic(Async)
export function epic (action$) {
  return action$.ofType(PING).delay(1000).mapTo({ type: PONG });
}

// Action Creators
export function ping () {
  return { type: PING };
}

