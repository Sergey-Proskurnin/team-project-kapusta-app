import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import useWindowDimensions from 'hooks/useWindowDimensions';
import transactionsOperations from 'redux/transactions/transactions-operations';
import { getTransactionsPerMonth } from 'redux/transactions/transactions-selectors';
import s from './ChartReport.module.css';

export default function ChartReport({ month, year, category }) {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if ((month, year)) {
      dispatch(transactionsOperations.getTransactionsMonthYear(month, year));
    }
  }, [dispatch, month, year]);

  const transactions = useSelector(getTransactionsPerMonth);

  const filteredByDate = transactions.filter(
    transaction =>
      transaction.month === String(month) && transaction.year === String(year),
  );

  const filteredByCategoryTransactions = filteredByDate.filter(transaction =>
    !!category ? transaction.category === category : transaction,
  );

  const sortedSubCategoryTransactions = [
    ...filteredByCategoryTransactions,
  ].sort((a, b) => b.sum - a.sum);

  const sortedLables = [...sortedSubCategoryTransactions].map(
    label => label.subCategory,
  );

  const sortedSum = [...sortedSubCategoryTransactions].map(data => data.sum);

  const getNextColor = color => {
    const colors = ['#FF751D', '#FFDAC0', '#fcd7bd', '#FF751D'];

    if (!color) {
      return colors[0];
    }

    const colorIdx = colors.findIndex(item => color === item);

    return colors[colorIdx + 1] ? colors[colorIdx + 1] : colors[0];
  };

  const colorsArray = array => {
    let prev = null;

    return sortedSum.map(item => {
      const currentColor = getNextColor(prev);

      prev = currentColor;

      return currentColor;
    });
  };

  const barWidth = width < 425 ? 15 : 38;

  const data = {
    labels: sortedLables,
    datasets: [
      {
        label: 'Расход',
        data: sortedSum,
        backgroundColor: colorsArray(sortedSum),
        borderColor: colorsArray(sortedSum),
        borderWidth: 1,
        borderRadius: 10,
        barThickness: barWidth,
      },
    ],
  };

  const optionsVertical = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const optionsHorizontal = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const options = width < 425 ? optionsHorizontal : optionsVertical;

  return (
    <div className={s.chartContainer}>
      <Bar data={data} options={options} />
    </div>
  );
}
