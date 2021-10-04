import React from 'react';
import ChartReport from 'components/ChartReport';

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

const TestChartView = () => {
  const getMaxValueForChart = transactions
    .map(transaction => transaction.sum)
    .reduce((acc, currentSum) => {
      return acc > currentSum ? acc : currentSum;
    });
  console.log(getMaxValueForChart);
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
