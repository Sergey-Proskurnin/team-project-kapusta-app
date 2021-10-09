import useWindowDimensions from 'hooks/useWindowDimensions';
import transactions from '../../data/db-transactions.json';
import { Bar } from 'react-chartjs-2';
import s from './ChartReport.module.css';

export default function ChartReport() {
  const { _, width } = useWindowDimensions();

  const { result } = transactions;
  const category = 'Продукты';
  const date = '2020-03-03T00:00:00.000Z';

  const filteredByDate = result.filter(
    transaction => transaction.date === date,
  );

  const filteredByCategoryTransactions = filteredByDate.filter(
    transaction => transaction.category === category,
  );

  const sortedSubCategoryTransactions = [
    ...filteredByCategoryTransactions,
  ].sort((a, b) => b.sum - a.sum);

  const sortedLables = [...sortedSubCategoryTransactions].map(
    label => label.subCategory,
  );

  const sortedSum = [...sortedSubCategoryTransactions].map(data => data.sum);

  const barWidth = width < 425 ? 15 : 38;

  const data = {
    labels: sortedLables,
    datasets: [
      {
        label: 'Расход',
        data: sortedSum,
        backgroundColor: [
          '#FF751D',
          '#FFDAC0',
          '#FFDAC0',
          '#FF751D',
          '#FFDAC0',
          '#FFDAC0',
          '#FF751D',
          '#FFDAC0',
          '#FFDAC0',
          '#FF751D',
          '#FFDAC0',
          '#FFDAC0',
          '#FF751D',
        ],
        borderColor: [
          '#FF751D',
          '#FFDAC0',
          '#FFDAC0',
          '#FF751D',
          '#FFDAC0',
          '#FFDAC0',
          '#FF751D',
          '#FFDAC0',
          '#FFDAC0',
          '#FF751D',
          '#FFDAC0',
          '#FFDAC0',
          '#FF751D',
        ],
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
