import React from 'react';
import PropTypes from 'prop-types';

export default function Response({ response }) {
  return (
    <p>{response}</p>
  );
}

Response.propTypes = {
  response: PropTypes.string
};
