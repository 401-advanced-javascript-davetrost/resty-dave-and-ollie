import React, { Component } from 'react';
import HistoryContainer from './HistoryContainer';
import CallContainer from './CallContainer';
import { apiCall } from '../services/api-service';

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
    this.setState({ method: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    apiCall(this.state.url)
      .then(response => {
        this.setState({ response: JSON.stringify(response, null, 4) });
      });

    // if(!existsInHistory(this.state.url, this.state.method)) {
    //   this.state.history.push();
    //   this.setState({ history });
    // }
  }

  render() {
    return (
      <>
        <HistoryContainer />
        <CallContainer 
          url={this.state.url} 
          method={this.state.method} 
          response={this.state.response} 
          handleUrlChange={this.handleUrlChange} 
          handleMethodChange={this.handleMethodChange} 
          handleSubmit={this.handleSubmit} />
      </>
    );
  }

  static propTypes = {

  }
}
