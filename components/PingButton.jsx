import React, { PropTypes } from 'react';

const propTypes = {
  ping: PropTypes.func.isRequired,
  isPinging: PropTypes.bool.isRequired
};

function PingButton(props) {
  return <button onClick={props.ping} >Ping</button>;
}

PingButton.propTypes = propTypes;

export default PingButton;
