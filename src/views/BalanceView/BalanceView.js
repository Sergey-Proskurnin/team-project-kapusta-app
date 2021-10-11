import React, { useEffect, useState } from 'react';
import AddTransaction from 'components/BalanceComponentsTest/AddTransaction/AddTransaction';
import { Container } from 'components/Container';

import TransactionsList from 'components/BalanceComponentsTest/TransactionsList/TransactionsList';
import useViewport from 'services/useViewport';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Summary from 'components/Summary';
import Balance from 'components/Balance';
import ToGoReport from 'components/ToGoReport';
import s from './BalanceView.module.css';

const BalanceView = () => {
  const [type, setType] = useState('income');
  const { width } = useViewport();
  const viewPort = useWindowDimensions();
  console.log(width);
  console.log(viewPort);

  const [date, setDate] = useState('');
  const startDate = new Date().toLocaleString().split(',')[0];

  useEffect(() => {
    setDate(startDate);
  }, [startDate]);

  const typeToggle = () => {
    type === 'income' ? setType('expense') : setType('income');
  };

  //FIXME: Прописать нормально стили! НЕ ИНЛАЙНОМ!
  return (
    <Container>
      {viewPort.width >= 1280 ? (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'baseline',
            }}
          >
            <Balance />
            <ToGoReport />
          </div>

          <div className={s.holst}>
            <div className={s.buttonContainer}>
              <button className={s.buttonSpentIncome}>РАСХОД</button>
              <button className={s.buttonSpentIncome}>ДОХОД</button>
            </div>

            <AddTransaction
              transactionType={type}
              date={date}
              // changeDate={setDate}
            />
            <div className={s.dataContainer}>
              <TransactionsList transactionType={type} />
              <Summary />
            </div>
          </div>
        </>
      ) : (
        <>
          <Balance />
          <div className={s.holst}>
            <div className={s.buttonContainer}>
              <button className={s.buttonSpentIncome}>РАСХОД</button>
              <button className={s.buttonSpentIncome}>ДОХОД</button>
            </div>
            <AddTransaction
              transactionType={type}
              date={date}
              // changeDate={setDate}
            />

            <div className={s.dataContainer}>
              <TransactionsList transactionType={type} />
            </div>
          </div>
          <Summary />
        </>
      )}
    </Container>
  );
};

export default BalanceView;
