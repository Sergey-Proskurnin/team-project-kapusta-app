import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';

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
    dispatch(transactionsOperations.deleteTransaction(transaction));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Описание</th>
          <th>Категория</th>
          <th>Сумма</th>
          <th>Удалить?</th>
        </tr>
      </thead>
      <tbody>
        {filteredTransactions.map(transaction => (
          <tr key={transaction._id}>
            <td>{transaction.date}</td>
            <td>{transaction.subCategory}</td>
            <td>{transaction.category}</td>
            <td>{transaction.sum}</td>
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
