import transactionsOperations from './transactions-operations';
import { useDispatch } from 'react-redux';

export default function TestWallet() {
  const dispatch = useDispatch();
  const testMe = () =>
    dispatch(transactionsOperations.getTransactionsDay('date', transactions));
  const transactions = [
    { month: 'jan', sum: 10, description: 'qweqwe', type: 'income' },
    { month: 'feb', sum: 10, description: 'qweqwe', type: 'spend' },
    { month: 'march', sum: 10, description: 'qweqwe', type: 'spend' },
    { month: 'april', sum: 10, description: 'qweqwe', type: 'income' },
    { month: 'may', sum: 10, description: 'qweqwe', type: 'income' },
    { month: 'jan', sum: 50, description: 'qweqwe', type: 'spend' },
    { month: 'jan', sum: 10, description: 'qweqwe', type: 'income' },
    { month: 'feb', sum: 10, description: 'qweqwe', type: 'spend' },
    { month: 'feb', sum: 10, description: 'qweqwe', type: 'income' },
    { month: 'march', sum: 10, description: 'qweqwe', type: 'income' },
    { month: 'march', sum: 10, description: 'qweqwe', type: 'income' },
    { month: 'may', sum: 10, description: 'qweqwe', type: 'income' },
    { month: 'may', sum: 10, description: 'qweqwe', type: 'spend' },
    { month: 'may', sum: 10, description: 'qweqwe', type: 'income' },
    { month: 'jun', sum: 10, description: 'qweqwe', type: 'income' },
  ];

  const calculateBalances = transactions => {
    const result = [];
    transactions.map(transaction => {
      const balanceByMonth = result.find(
        item => item.month === transaction.month,
      );
      if (!balanceByMonth) {
        result.push({
          month: transaction.month,
          value:
            transaction.type === 'income' ? +transaction.sum : -transaction.sum,
        });
      } else {
        transaction.type === 'income'
          ? (balanceByMonth.value += transaction.sum)
          : (balanceByMonth.value -= transaction.sum);
      }
    });
    console.log(result);
    return result;
  };
  // () => calculateBalances(transactions)
  return (
    <button type="button" onClick={testMe}>
      Test
    </button>
  );
}
