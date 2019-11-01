import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CallForm extends Component {
  state = {

  }

  render() {
    return (
      <form>
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
      </form>
    );
  }

  static propTypes = {

  }
}


