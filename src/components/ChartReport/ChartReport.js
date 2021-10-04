import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

export default function Demo({
  chartData,
  maxValue,
  valueFiled,
  argumentField,
}) {
  return (
    <Paper>
      <Chart data={chartData}>
        <ArgumentAxis />
        <ValueAxis max={maxValue} />

        <BarSeries valueField={valueFiled} argumentField={argumentField} />
        <Animation />
      </Chart>
    </Paper>
  );
}
