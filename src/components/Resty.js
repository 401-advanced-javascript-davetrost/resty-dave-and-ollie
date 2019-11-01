import React, { Component } from 'react';
import HistoryContainer from '../containers/HistoryContainer';
import CallContainer from '../containers/CallContainer';

export default class Resty extends Component {
  state = {

  }

  render() {
    return (
      <>
        <HistoryContainer />
        <CallContainer />
      </>
    );
  }

  static propTypes = {

  }
}
