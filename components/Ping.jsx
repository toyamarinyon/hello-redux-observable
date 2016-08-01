import React from 'react';
import PingButton from './PingButton';

export default class Ping extends React.Component {
  render() {
    const { isPinging, ping } = this.props;
    return (
      <div>
        <h1>is pinging: {isPinging.toString()}</h1>
        <button onClick={ping}>Start PING</button>
        <PingButton ping={ping} isPinging={isPinging} />
      </div>
    );
  }
}
