import React from 'react';
import data from '../../data/month.json';
import styles from './Summary.module.css';

const Summary = () => {
  return (
    <div className={styles.container}>
      <h4>Сводка</h4>
      <ul className={styles.summaryList}>
        {data.map(({ name, id }, index) => (
          <li key={index} className={styles.summaryItem}>
            <p>{name}</p>
            <p>{`${id}.00`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
