import React from 'react';
import PropTypes from 'prop-types';
import { HistoryItem } from '../components/HistoryItem';
import styles from './HistoryContainer.css';

export default function HistoryContainer({ items, handleHistorySelect }) {
  const historyItems = items.map(item => (
    <HistoryItem
      key={item._id}
      handleHistorySelect={handleHistorySelect}
      {...item} />
  ));

  return (
    <section className={styles.HistoryContainer}>
      <h2>History</h2>
      <div>
        {historyItems}
      </div>
    </section>
  );
}

HistoryContainer.propTypes = {
  items: PropTypes.array.isRequired,
  handleHistorySelect: PropTypes.func.isRequired,
};
