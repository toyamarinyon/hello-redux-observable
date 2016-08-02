import React, { PropTypes } from 'react';

const propTypes = {
  ping: PropTypes.func.isRequired,
  isPinging: PropTypes.bool.isRequired
};

function PingButton(props) {
  if (props.isPinging) {
    return (
      <button className="btn btn-primary">
        <i className="fa fa-spinner fa-pulse"></i>
      </button>
    );
  }
  return <button className="btn btn-primary" onClick={props.ping} >Ping</button>;
}

PingButton.propTypes = propTypes;

export default PingButton;
