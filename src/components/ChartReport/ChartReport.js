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
  const [aaa, setAaa] = useState({});

  // const aaa =
  //   width > 480
  //     ? { bar: { width: '38' }, chart: { rotated: false } }
  //     : { bar: { height: '38', rotated: true }, chart: { rotated: true } };

  useEffect(() => {
    setAaa(
      width > 480
        ? { bar: { width: '38' }, chart: { rotated: false } }
        : { bar: { height: '38' }, chart: { rotated: true } },
    );
  }, [width]);

  console.log(aaa);

  return (
    <Paper>
      <Chart data={chartData} {...aaa.chart}>
        <ArgumentAxis />
        <ValueAxis max={maxValue} />

        <BarSeries
          valueField="sum"
          argumentField="subCategory"
          color={'#FF751D'}
          // width="38"
          {...aaa.bar}
          // height="38"
        />
        <Animation />
      </Chart>
    </Paper>
  );

  // return width > 480 ? (
  //   <Paper>
  //     <Chart data={chartData}>
  //       <ArgumentAxis />
  //       <ValueAxis max={maxValue} />

  //       <BarSeries
  //         valueField="sum"
  //         argumentField="subCategory"
  //         color={'#FF751D'}
  //         width="38"
  //         // height="38"
  //       />
  //       <Animation />
  //     </Chart>
  //   </Paper>
  // ) : (
  //   <Paper>
  //     <Chart data={chartData} rotated={true}>
  //       <ArgumentAxis />
  //       <ValueAxis max={maxValue} />

  //       <BarSeries
  //         valueField="sum"
  //         argumentField="subCategory"
  //         color={'#FF751D'}
  //         // width="38"
  //         height="38"
  //       />
  //       <Animation />
  //     </Chart>
  //   </Paper>
  // );
}
