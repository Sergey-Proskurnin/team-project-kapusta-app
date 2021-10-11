import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import styles from './TransactionsList.module.css';

export default function TransactionsList({ transactionType, date }) {
  const dispatch = useDispatch();
  const transactions = useSelector(selectors.getTransactionsPerDay);
  const filteredTransactions = transactions.filter(
    item => item.type === transactionType,
  );

  useEffect(() => {
    if (date) {
      dispatch(transactionsOperations.getTransactionsDay(date));
    }
  }, [date]);
  const deleteTransaction = transaction => {
    dispatch(transactionsOperations.deleteTransaction(transaction));
  };

  return (
    <table className={styles.main}>
      <thead className={styles.theadTable}>
        <tr>
          <th className={styles.th}>Дата</th>
          <th className={styles.th}>Описание</th>
          <th className={styles.th}>Категория</th>
          <th className={styles.th}>Сумма</th>
          {/* <th>Удалить?</th> */}
        </tr>
      </thead>
      <tbody>
        {filteredTransactions.map(transaction => (
          <tr key={transaction._id}>
            <td className={styles.th}>{transaction.date}</td>
            <td className={styles.th}>{transaction.subCategory}</td>
            <td className={styles.th}>{transaction.category}</td>
            <td className={styles.th}>
              {transactionType === 'income'
                ? transaction.sum
                : `-${transaction.sum}`}
            </td>
            <td>
              <button
                type="button"
                onClick={() => deleteTransaction(transaction)}
              >
                иконка корзинки
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
