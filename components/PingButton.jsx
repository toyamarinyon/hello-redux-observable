import React from 'react';

export default class PingButton extends React.Component {
  render() {
    const { ping, isPinging } = this.props;
    const buttonText = isPinging ? 'PINGING...' : 'Start PING';
    return (
      <button onClick={ping}>{buttonText}</button>
    );
  }
}
