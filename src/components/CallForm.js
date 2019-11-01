import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './CallForm.css';
import propTypes from 'prop-types';

export default class CallForm extends Component {

  render() {
    return (
      <form className={styles.CallForm}>
        <input type="text" name="url" placeholder="URL" onChange={this.props.handleUrlChange}></input>
        <label>
          <input defaultChecked name="method" type="radio" value="get" onChange={this.props.handleMethodChange}/>
          <span>GET</span>
        </label>
        <label>
          <input name="method" type="radio" value="post"/>
          <span>POST</span>
        </label>
        <label>
          <input name="method" type="radio" value="put" />
          <span>PUT</span>
        </label>
        <label>
          <input name="method" type="radio" value="patch" />
          <span>PATCH</span>
        </label>
        <label>
          <input name="method" type="radio" value="delete" />
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
    handleUrlChange: propTypes.func.isRequired,
    handleMethodChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired
  }
}


