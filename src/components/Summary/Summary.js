import React, { useEffect } from 'react';
import data from '../../data/month.json';
import styles from './Summary.module.css';
import * as selectors from 'redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import { useDispatch, useSelector } from 'react-redux';

const Summary = ({ year = 2021 }) => {
  const dispatch = useDispatch();
  const totalBalance = useSelector(selectors.getTotalBalance);

  useEffect(() => {
    dispatch(transactionsOperations.getMonthlyBalancesYear(year));
    // dispatch(transactionsOperations.getTransactionsMonthYear(10, 2021));
  }, [totalBalance]);
  const balances = useSelector(selectors.getMonthlyBalances);

  return (
    <div className={styles.summaryContainer}>
      <h4 className={styles.summaryTitle}>Сводка</h4>
      <ul className={styles.summaryList}>
        {balances.map(({ month, value }, index) => (
          <li key={index} className={styles.summaryItem}>
            <p className={styles.summaryDescription}>
              {data.find(monthData => monthData.id === month).name}
            </p>
            <p className={styles.summaryDescription}>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
