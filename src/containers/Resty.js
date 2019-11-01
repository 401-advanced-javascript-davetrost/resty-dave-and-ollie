import React, { Component } from 'react';
import HistoryContainer from './HistoryContainer';
import CallContainer from './CallContainer';

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
