import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './CallForm.css';

export default class CallForm extends Component {
  state = {

  }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   this.setState(state => {
  //     console.log(state);
  //   });
  // }

  render() {
    return (
      <form className={styles.CallForm}>
        <input type="text" name="url" placeholder="URL"></input>
        <label>
          <input defaultChecked name="method" type="radio" value="get" />
          <span>GET</span>
        </label>
        <label>
          <input name="method" type="radio" value="post" />
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
          <button type="submit">Go</button>
        </label>

        <textarea name="requestBody" maxLength="250" minLength="200" placeholder="Raw JSON Body"></textarea>
      </form>
    );
  }

  static propTypes = {

  }
}


