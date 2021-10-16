import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import useWindowDimensions from 'hooks/useWindowDimensions';
import transactionsOperations from 'redux/transactions/transactions-operations';
import { getTransactionsPerMonth } from 'redux/transactions/transactions-selectors';
import s from './ChartReport.module.css';

export default function ChartReport({ month, year, category, type }) {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if ((month, year)) {
      dispatch(transactionsOperations.getTransactionsMonthYear(month, year));
    }
  }, [dispatch, month, year]);

  const transactions = useSelector(getTransactionsPerMonth);

  const filteredByType = transactions.filter(
    transaction => transaction.type === type,
  );

  const filteredByDate = filteredByType.filter(
    transaction =>
      transaction.month === String(month) && transaction.year === String(year),
  );

  console.log(filteredByDate, 'filteredByDate');

  const findTotalSumForChart = data => {
    if (!!category) {
      return data
        .filter(transaction => transaction.category === category)
        .reduce((result, currentSub) => {
          const subCategory = result.find(
            item => item.subCategory === currentSub.subCategory,
          );
          if (!subCategory) {
            result.push({
              subCategory: currentSub.subCategory,
              sum: currentSub.sum,
            });
          } else {
            subCategory.sum += currentSub.sum;
          }
          return result;
        }, []);
    }

    const result = [];
    data.map(transaction => {
      const category = result.find(
        item => item.category === transaction.category,
      );
      if (!category) {
        return result.push({
          category: transaction.category,
          sum: transaction.sum,
        });
      } else {
        return (category.sum += transaction.sum);
      }
    });
    return result;
  };

  console.log(findTotalSumForChart(filteredByDate), 'findTotalSumForChart');

  const sortedSubCategoryTransactions = [
    ...findTotalSumForChart(filteredByDate),
  ].sort((a, b) => b.sum - a.sum);

  const sortedLables = [...sortedSubCategoryTransactions].map(tr => {
    return tr.subCategory ? tr.subCategory : tr.category;
  });

  const sortedSum = [...sortedSubCategoryTransactions].map(data => data.sum);

  const labelName = type === 'expense' ? 'Расход' : 'Доход';

  const getNextColor = color => {
    const colors = ['#FF751D', '#FFDAC0', '#fcd7bd'];

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
        label: labelName,
        data: sortedSum,
        backgroundColor: colorsArray(sortedSum),
        borderColor: colorsArray(sortedSum),
        borderWidth: 1,
        borderRadius: 10,
        barThickness: barWidth,
        barMargin: 20,
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
    maintainAspectRatio: false,
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
      <Bar data={data} height={400} width={320} options={options} />
    </div>
  );
}
