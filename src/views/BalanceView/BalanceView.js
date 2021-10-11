import React, { useEffect, useState } from 'react';
import AddTransaction from 'components/BalanceComponentsTest/AddTransaction/AddTransaction';
import { Container } from 'components/Container';

import TransactionsList from 'components/BalanceComponentsTest/TransactionsList/TransactionsList';
// import useViewport from 'services/useViewport';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Summary from 'components/Summary';
import Balance from 'components/Balance';

import s from './BalanceView.module.css';

const BalanceView = () => {
  const [type, setType] = useState('income');
  // const { width } = useViewport();
  const viewPort = useWindowDimensions();
  // console.log(width);
  // console.log(viewPort);

  const [date, setDate] = useState('');
  const day = new Date();
  const startDate = `${day.getUTCDate()}.${
    day.getUTCMonth() + 1
  }.${day.getUTCFullYear()}`;

  useEffect(() => {
    setDate(startDate);
  }, []);
  console.log(date);
  const typeToggle = e => {
    setType(`${e.target.title}`);
  };

  return (
    <Container>
      {viewPort.width >= 1280 ? (
        <>
          <Balance />
          <div className={s.holst}>
            <div className={s.buttonContainer}>
              <button
                className={s.buttonSpentIncome}
                onClick={typeToggle}
                title="expense"
              >
                РАСХОД
              </button>
              <button
                className={s.buttonSpentIncome}
                onClick={typeToggle}
                title="income"
              >
                ДОХОД
              </button>
            </div>
            <AddTransaction
              transactionType={type}
              date={date}

              // changeDate={setDate}
            />

            <div className={s.dataContainer}>
              <TransactionsList transactionType={type} date={date} />
              <Summary />
            </div>
          </div>
        </>
      ) : (
        <>
          <Balance />
          <div className={s.holst}>
            <div className={s.buttonContainer}>
              <button
                className={s.buttonSpentIncome}
                onClick={typeToggle}
                title="expense"
              >
                РАСХОД
              </button>
              <button
                className={s.buttonSpentIncome}
                onClick={typeToggle}
                title="income"
              >
                ДОХОД
              </button>
            </div>
            <AddTransaction
              transactionType={type}
              date={date}
              // changeDate={setDate}
            />

            <div className={s.dataContainer}>
              <TransactionsList transactionType={type} date={date} />
            </div>
          </div>
          <Summary />
        </>
      )}
    </Container>
  );
};

export default BalanceView;
// {
//   viewPort && <Summary />;
// }
