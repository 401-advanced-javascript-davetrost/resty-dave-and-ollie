import React from 'react';
import PropTypes from 'prop-types';

export const HistoryItem = ({ url, method }) => {
  return (
    <div>
      <h3>{method}</h3>
      <p>{url}</p>
    </div>
  );
};

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};
