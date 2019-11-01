import React, { Component } from 'react';
import HistoryContainer from './HistoryContainer';
import CallContainer from './CallContainer';

export default class Resty extends Component {
  state = {
    history: [],
    url: '',
    method: 'get',
    response: ''
  }

  handleUrlChange = ({ target }) => {
    this.setState({ url: target.value });
  }

  handleMethodChange = ({ target }) => {
    console.log('changed');
    
    this.setState({ method: target.name });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState(state);

    // api call
    // .then(response =>
    //  this.setState(state => {
    //    response
    //  });

    // if(!existsInHistory(this.state.url, this.state.method)) {
    //   this.state.history.push();
    //   this.setState({ history });
    // }
  }

  render() {
    return (
      <>
        <HistoryContainer />
        <CallContainer handleUrlChange={this.handleUrlChange} handleMethodChange={this.handleMethodChange} handleSubmit={this.handleSubmit}/>
      </>
    );
  }

  static propTypes = {

  }
}
