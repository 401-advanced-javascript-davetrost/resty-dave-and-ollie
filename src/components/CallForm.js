import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './CallForm.css';
import propTypes from 'prop-types';

export default class CallForm extends Component {

  render() {
    return (
      <form className={styles.CallForm}>
        <input type="text" value={this.props.url} name="url" placeholder="URL" onChange={this.props.handleUrlChange}></input>
        <label>
          <input checked={this.props.method === 'get'} name="method" type="radio" value="get" onChange={this.props.handleMethodChange}/>
          <span>GET</span>
        </label>
        <label>
          <input checked={this.props.method === 'post'} name="method" type="radio" value="post" onChange={this.props.handleMethodChange}/>
          <span>POST</span>
        </label>
        <label>
          <input checked={this.props.method === 'put'} name="method" type="radio" value="put" onChange={this.props.handleMethodChange}/>
          <span>PUT</span>
        </label>
        <label>
          <input checked={this.props.method === 'patch'} name="method" type="radio" value="patch" onChange={this.props.handleMethodChange}/>
          <span>PATCH</span>
        </label>
        <label>
          <input checked={this.props.method === 'delete'} name="method" type="radio" value="delete" onChange={this.props.handleMethodChange}/>
          <span>DELETE</span>
        </label>
        <label>
          <button type="submit" onClick={this.props.handleSubmit}>Go</button>
        </label>

        <textarea name="requestBody" maxLength="250" minLength="200" placeholder="Raw JSON Body"></textarea>
      </form>
    );
  }

  static propTypes = {
    url: propTypes.string.isRequired,
    method: propTypes.string.isRequired,
    handleUrlChange: propTypes.func.isRequired,
    handleMethodChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired
  }
}


