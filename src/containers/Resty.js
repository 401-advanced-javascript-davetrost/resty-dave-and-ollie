import React, { Component } from 'react';
import HistoryContainer from './HistoryContainer';
import CallContainer from './CallContainer';
import { apiCall } from '../services/api-service';

export default class Resty extends Component {
  state = {
    history: [],
    url: '',
    method: 'get',
    body: '',
    response: ''
  }

  handleUrlChange = ({ target }) => {
    this.setState({ url: target.value });
  }

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  }

  handleBodyChange = ({ target }) => {
    this.setState({ body: target.value });
  }

  handleHistorySelect = (event, _idFromHistorySelect) => {
    const callDetails = this.state.history.find(({ _id }) => _id === _idFromHistorySelect);
    this.setState({
      url: callDetails.url, 
      method: callDetails.method,
      body: callDetails.body 
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    apiCall(this.state.url, this.state.method, this.state.body)
      .then(response => {
        this.setState({ response: JSON.stringify(response, null, 4) });
      })
      .catch(err => {
        console.log(err);
      });

    const callFoundInHistory = this.state.history.find(({ method, url, body }) => {
      return method === this.state.method && url === this.state.url && body === this.state.body;
    });
    if(!callFoundInHistory) {
      const newItem = { 
        _id: `${this.state.url}${this.state.method.charAt(0)}${this.state.body.replace(' ', '')}`,
        url: this.state.url,
        method: this.state.method,
        body: this.state.body,
      };
      this.setState({ history: [...this.state.history, newItem] });
    }
  }

  render() {
    return (
      <>
        <HistoryContainer 
          items={this.state.history} 
          handleHistorySelect={this.handleHistorySelect}
        />
        <CallContainer 
          url={this.state.url} 
          method={this.state.method} 
          body={this.state.body} 
          response={this.state.response} 
          handleUrlChange={this.handleUrlChange} 
          handleMethodChange={this.handleMethodChange} 
          handleBodyChange={this.handleBodyChange} 
          handleSubmit={this.handleSubmit} />
      </>
    );
  }

  static propTypes = {

  }
}
