import React from 'react';
import PropTypes from 'prop-types';
import { HistoryItem } from '../components/HistoryItem';

export default function HistoryContainer({ items, handleHistorySelect }) {
  const historyItems = items.map(item => (
    <HistoryItem
      key={item._id}
      handleHistorySelect={handleHistorySelect}
      {...item} />
  ));

  return (
    <section>
      <h2>History</h2>
      <div>
        {historyItems}
      </div>
    </section>
  );
}

HistoryContainer.propTypes = {
  items: PropTypes.array.isRequired,
  // url: PropTypes.string.isRequired,
  // method: PropTypes.string.isRequired,
  // body: PropTypes.string.isRequired,
  handleHistorySelect: PropTypes.func.isRequired,
};
