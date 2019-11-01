import React from 'react';
import PropTypes from 'prop-types';

export default function Response({ data }) {
  return (
    <p>{data}</p>
  );
}

Response.propTypes = {
  data: PropTypes.string
};
