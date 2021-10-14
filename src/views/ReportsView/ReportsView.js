import React, { useState, useEffect } from 'react';
import ChartReport from 'components/ChartReport';
import { Container } from 'components/Container';
import { Report } from 'components/Report';

// import { useDispatch, useSelector } from 'react-redux';
// import { getTransactionsPerMonth } from 'redux/transactions';
// import transactionsOperations from 'redux/transactions/transactions-operations';

const ReportsView = () => {
  let date = new Date();
  let selectedMonth = date.getMonth() + 1;
  let selectedYear = date.getFullYear();

  const [month, setMonth] = useState(selectedMonth);
  const [year, setYear] = useState(selectedYear);

  return (
    <Container>
      <Report transactionType={'expense'} month={month} year={year} />
      <ChartReport />
    </Container>
  );
};

export default ReportsView;
