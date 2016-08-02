import React, { PropTypes } from 'react';
import PingButton from './PingButton';

const propTypes = {
  ping: PropTypes.func.isRequired,
  isPinging: PropTypes.bool.isRequired
};

function Ping(props) {
  return (
    <div>
      <h1>is pinging: {props.isPinging.toString()}</h1>
      <button onClick={props.ping}>Start PING</button>
      <PingButton {...props} />
    </div>
  );
}

Ping.propTypes = propTypes;

export default Ping;
