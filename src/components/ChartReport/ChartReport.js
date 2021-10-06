import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

export default function ChartReport({ chartData, maxValue }) {
  return (
    <Paper>
      <Chart data={chartData}>
        <ArgumentAxis />
        <ValueAxis max={maxValue} />

        <BarSeries valueField="sum" argumentField="subCategory" />
        <Animation />
      </Chart>
    </Paper>
  );
}
