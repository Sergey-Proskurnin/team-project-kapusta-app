// import React, { useEffect } from 'react';
import ChartReport from 'components/ChartReport';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTransactionsPerMonth } from 'redux/transactions';
// import transactionsOperations from 'redux/transactions/transactions-operations';

import transactions from 'data/db-transactions.json';

const TestChartView = () => {
  // When will be real data ⬇️
  // const dispatch = useDispatch();
  // const transactions = useSelector(getTransactionsPerMonth);
  //   useEffect(() => {
  //   dispatch(transactionsOperations.getTransactionsMonthYear());
  // }, [dispatch]);

  const { result } = transactions;
  const category = 'Продукты';
  const date = '2020-03-03T00:00:00.000Z';

  const filteredByDate = result.filter(
    transaction => transaction.date === date,
  );

  const filteredByCategoryTransactions = filteredByDate.filter(
    transaction => transaction.category === category,
  );

  const maxValueForChart = filteredByCategoryTransactions.reduce(
    (prevTransaction, currentTransaction) =>
      prevTransaction.sum > currentTransaction.sum
        ? prevTransaction
        : currentTransaction,
  ).sum;

  const sortedSubCategoryTransactions = [
    ...filteredByCategoryTransactions,
  ].sort((a, b) => b.sum - a.sum);

  console.log(sortedSubCategoryTransactions);
  return (
    <ChartReport
      chartData={sortedSubCategoryTransactions}
      maxValue={maxValueForChart}
    />
  );
};

export default TestChartView;
