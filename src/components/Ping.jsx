import React, { PropTypes } from 'react';
import PingButton from './PingButton';

const propTypes = {
  ping: PropTypes.func.isRequired,
  isPinging: PropTypes.bool.isRequired
};

function Ping(props) {
  return (
    <div className="container">
      <h1>is pinging: {props.isPinging.toString()}</h1>
      <PingButton {...props} />
    </div>
  );
}

Ping.propTypes = propTypes;

export default Ping;
