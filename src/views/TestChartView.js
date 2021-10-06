import React, { useEffect } from 'react';
import ChartReport from 'components/ChartReport';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsPerMonth } from 'redux/transactions';
import transactionsOperations from 'redux/transactions/transactions-operations';

const TestChartView = () => {
  const dispatch = useDispatch();
  //data
  const transactions = useSelector(getTransactionsPerMonth);
  console.log(transactions.result);

  const getMaxValueForChart = () => {
    const result = transactions.result;
    return result.reduce((acc, currentTransaction) => {
      return acc.sum < currentTransaction.sum
        ? acc.sum
        : currentTransaction.sum;
    });
  };
  console.log(getMaxValueForChart());

  // const maxValueForChart = transactions.result.reduce(
  //   (acc, currentTransaction) => {
  //     return acc.sum < currentTransaction.sum
  //       ? acc.sum
  //       : currentTransaction.sum;
  //   },
  // );
  useEffect(() => {
    dispatch(transactionsOperations.getTransactionsMonthYear());
  }, [dispatch]);
  return (
    <div>
      <ChartReport
        chartData={transactions}
        maxValue={getMaxValueForChart}
        valueFiled="sum"
        argumentField="month"
      />
    </div>
  );
};

export default TestChartView;
