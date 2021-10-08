import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useEffect, useState } from 'react';

export default function ChartReport({ chartData, maxValue }) {
  const { height, width } = useWindowDimensions();
  const [chartProps, setChartProps] = useState({});

  useEffect(() => {
    setChartProps(
      width > 480
        ? { bar: { width: '38' }, chart: { rotated: false } }
        : { bar: { height: '38' }, chart: { rotated: true } },
    );
  }, [width]);

  return (
    <Paper>
      <Chart data={chartData} {...chartProps.chart}>
        <ArgumentAxis />
        <ValueAxis max={maxValue} />

        <BarSeries
          valueField="sum"
          argumentField="subCategory"
          color={'#FF751D'}
          {...chartProps.bar}
        />
        <Animation />
      </Chart>
    </Paper>
  );
}
