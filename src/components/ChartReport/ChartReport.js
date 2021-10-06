import { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsPerMonth } from 'redux/transactions';
import transactionsOperations from 'redux/transactions/transactions-operations';

export default function ChartReport({ chartData, maxValue }) {
  return (
    <Paper>
      <Chart data={chartData}>
        <ArgumentAxis />
        <ValueAxis max={maxValue} />

        {/* <BarSeries valueField={valueFiled} argumentField={argumentField} /> */}
        <Animation />
      </Chart>
    </Paper>
  );
}
