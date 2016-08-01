import React from 'react';
import { connect } from 'react-redux';
import { ping } from '../redux/modules/ping';

let App = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    isPinging: state.isPinging
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    ping: () => dispatch(ping())
  };
};

App = connect(
  mapStateToProps,
  mapDispachToProps
)(App);

export default App;
