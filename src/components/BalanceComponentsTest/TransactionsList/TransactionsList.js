import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import styles from './TransactionsList.module.css';
import  deleteBtn  from 'components/SvgIcons/DeleteBtn/DeleteBtn.svg';


export default function TransactionsList({
  transactionType,
  date = '10-10-2021',
}) {
  const dispatch = useDispatch();
  const transactions = useSelector(selectors.getTransactionsPerDay);
  const filteredTransactions = transactions.filter(
    item => item.type === transactionType,
  );

  useEffect(
    () => dispatch(transactionsOperations.getTransactionsDay(date)),
    [],
  );
  const deleteTransaction = transaction => {
    dispatch(transactionsOperations.deleteTransaction(transactions));
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
          <tr key={transaction._id}  className={styles.td}>
            <td>{transaction.date}</td>
            <td>{transaction.subCategory}</td>
            <td>{transaction.category}</td>
            <td>{transaction.sum}</td>
            <td>
              {/* <button
                type="button"
                onClick={() => deleteTransaction(transaction)}
              >
                
              </button> */}
              <img src={deleteBtn} className={styles.deleteBtn} onClick={() => deleteTransaction(transactions)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
