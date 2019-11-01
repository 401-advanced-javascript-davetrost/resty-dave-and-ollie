import React from 'react';
import PropTypes from 'prop-types';

export default function Response({ response }) {
  return (
    <pre>{response}</pre>
  );
}

Response.propTypes = {
  response: PropTypes.string
};
