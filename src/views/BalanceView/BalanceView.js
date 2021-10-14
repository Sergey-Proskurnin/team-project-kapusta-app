import React, { useEffect, useState } from 'react';
import AddTransaction from 'components/BalanceComponentsTest/AddTransaction/AddTransaction';
import { Container } from 'components/Container';

import TransactionsList from 'components/BalanceComponentsTest/TransactionsList/TransactionsList';
// import useViewport from 'services/useViewport';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Summary from 'components/Summary';
import Balance from 'components/Balance';
import ToGoReport from 'components/ToGoReport';
import ArrowToGoBack from 'components/ArrowToGoBack';
import contextProps from 'context/context';
import s from './BalanceView.module.css';

const BalanceView = () => {
  const [type, setType] = useState('income');
  const [date, setDate] = useState('');

  const viewPort = useWindowDimensions();

  const day = new Date();

  const startDate = `${day.getDate()}.${
    day.getMonth() + 1
  }.${day.getFullYear()}`;

  useEffect(() => {
    setDate(startDate);
  }, [date]);

  const typeToggle = e => {
    setType(`${e.target.title}`);
  };

  return (
    <contextProps.Provider value={type}>
      <Container>
        {viewPort.width > 768 && (
          <>
            <div className={s.balanceContainer}>
              <div>
                <Balance />
              </div>
              <div>
                <ToGoReport />
              </div>
            </div>
            <div className={s.holst}>
              <div className={s.buttonContainer}>
                <button
                  className={`${s.buttonSpentIncome} ${
                    type === 'expense' && s.buttonSpentIncomeActive
                  }`}
                  onClick={typeToggle}
                  title="expense"
                >
                  РАСХОД
                </button>
                <button
                  className={`${s.buttonSpentIncome} ${
                    type === 'income' && s.buttonSpentIncomeActive
                  }`}
                  onClick={typeToggle}
                  title="income"
                >
                  ДОХОД
                </button>
              </div>
              <AddTransaction
                transactionType={type}
                date={date}
                changeDate={setDate}
              />
              <div className={s.dataContainer}>
                <TransactionsList transactionType={type} date={date} />
                {viewPort.width > 1280 && <Summary />}
              </div>
            </div>
            <div className={s.containerSummary768}>
              {viewPort.width <= 1279 && viewPort.width > 768 && <Summary />}
            </div>
          </>
        )}
        {viewPort.width <= 767 && (
          <>
            <div className={s.holst}>
              <ToGoReport />
            </div>
            <div className={s.balanceContainer}>
              <Balance />
            </div>
            <div className={s.buttonContainer}>
              <button
                className={s.buttonExpense}
                onClick={typeToggle}
                title="expense"
              >
                РАСХОД
              </button>
              <button
                className={s.buttonIncome}
                onClick={typeToggle}
                title="income"
              >
                ДОХОД
              </button>
            </div>

            {/* <ArrowToGoBack/>
        <AddTransaction
         transactionType={type}
         date={date}/> */}
          </>
        )}
      </Container>
    </contextProps.Provider>
  );
};

export default BalanceView;
