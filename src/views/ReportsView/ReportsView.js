import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ChartReport from 'components/ChartReport';
import { Container } from 'components/Container';
import { Report } from 'components/Report';

import s from './ReportView.module.css';
import transactionsOperations from 'redux/transactions/transactions-operations';

const ReportsView = () => {
  const dispatch = useDispatch();

  let date = new Date();
  let selectedMonth = date.getMonth() + 1;
  let selectedYear = date.getFullYear();
  const [month, setMonth] = useState(selectedMonth);
  const [year, setYear] = useState(selectedYear);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense');

  useEffect(() => {
    if ((month, year)) {
      dispatch(transactionsOperations.getTransactionsMonthYear(month, year));
    }
  }, [dispatch, month, year]);

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
  const onHandleChangeType = () => {
    if (type === 'expense') {
      setType('income');
      setCategory('');
    }
    if (type === 'income') {
      setType('expense');
      setCategory('');
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
          onHandleChangeType={onHandleChangeType}
          type={type}
        />
        <ChartReport
          month={month}
          year={year}
          category={category}
          type={type}
        />
      </div>
    </Container>
  );
};

export default ReportsView;
