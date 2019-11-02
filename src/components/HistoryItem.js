import React from 'react';
import PropTypes from 'prop-types';

export const HistoryItem = ({ _id, url, method, handleHistorySelect }) => {
  return (
    <div onClick={event => handleHistorySelect(event, _id)}>
      <h3>{method}</h3>
      <p>{url}</p>
    </div>
  );
};

HistoryItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string,
  handleHistorySelect: PropTypes.func.isRequired
};
