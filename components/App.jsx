import React from 'react';
import { connect } from 'react-redux';
import PingContainer from '../containers/PingContainer';

export default class App extends React.Component {
  render() {
    return (<PingContainer />);
  }
}
