import React, { useState } from 'react';
import ChartReport from 'components/ChartReport';
import { Container } from 'components/Container';
import { Report } from 'components/Report';
import s from './ReportView.module.css';

const ReportsView = () => {
  let date = new Date();
  let selectedMonth = date.getMonth() + 1;
  let selectedYear = date.getFullYear();
  const [month, setMonth] = useState(selectedMonth);
  const [year, setYear] = useState(selectedYear);
  const [category, setCategory] = useState('');
  const onHandleClickRight = () => {
    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
  };
  const onHandleClickLeft = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };
  const getCategory = e => {
    setCategory(e.target.attributes.title.nodeValue);
  };

  return (
    <Container>
      <div className={s.containerReport}>
        <Report
          month={month}
          year={year}
          onHandleClickRight={onHandleClickRight}
          onHandleClickLeft={onHandleClickLeft}
          getCategory={getCategory}
        />
        <ChartReport month={month} year={year} category={category} />
      </div>
    </Container>
  );
};

export default ReportsView;
