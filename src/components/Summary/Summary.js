import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import data from 'data/month.json';
import styles from './Summary.module.css';
import * as selectors from 'redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import OnLoader from 'components/OnLoader';
import { getLoader } from 'redux/transactions';

const Summary = ({ year }) => {
  const dispatch = useDispatch();
  const totalBalance = useSelector(selectors.getTotalBalance);
  const loader = useSelector(getLoader);

  useEffect(() => {
    dispatch(transactionsOperations.getMonthlyBalancesYear(year));
  }, [totalBalance, year, dispatch]);
  const balances = useSelector(selectors.getMonthlyBalances);

  const sortedBalances = [...balances].sort((a, b) => b.month - a.month);

  return (
    <div className={styles.summaryContainer}>
      {loader && <OnLoader />}
      <h4 className={styles.summaryTitle}>Сводка</h4>
      <ul className={styles.summaryList}>
        {sortedBalances.map(({ month, value }, index) => (
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
