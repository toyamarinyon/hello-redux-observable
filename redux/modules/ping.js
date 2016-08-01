import 'rxjs';

const PING = 'PING';
const PONG = 'PONG';

export const ping = () => ({ type: PING });

export const pingEpic = action$ => {
  return action$.ofType(PING)
    .delay(1000)
    .mapTo({ type: PONG });
}

export const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
}
