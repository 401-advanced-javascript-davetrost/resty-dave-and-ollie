import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';

export default function Response({ response }) {
  return (
    <pre styles={styles.Response}>{response}</pre>
  );
}

Response.propTypes = {
  response: PropTypes.string
};
