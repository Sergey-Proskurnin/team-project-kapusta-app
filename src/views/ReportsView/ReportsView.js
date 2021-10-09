// import React, { useEffect } from 'react';
import ChartReport from 'components/ChartReport';
import { Container } from 'components/Container';
import { Report } from 'components/Report';

// import { useDispatch, useSelector } from 'react-redux';
// import { getTransactionsPerMonth } from 'redux/transactions';
// import transactionsOperations from 'redux/transactions/transactions-operations';

const ReportsView = () => {
  return (
    <Container>
      <Report />
      <ChartReport />
    </Container>
  );
};

export default ReportsView;
