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
import DateForm from 'components/DateForm';
import contextProps from 'context/context';
import s from './BalanceView.module.css';

const BalanceView = () => {
  const [type, setType] = useState('income');
  const [date, setDate] = useState('');
  const [picker, setPicker] = useState(false);
  const [listRender, setListRender] = useState(true);

  const handleCalendarClick = () => {
    setPicker(true);
  };

  const closePicker = dateNew => {
    const newDate = `${dateNew.getUTCDate()}.${
      dateNew.getUTCMonth() + 1
    }.${dateNew.getUTCFullYear()}`;

    setDate(newDate);
    setPicker(false);
  };

  const typeToggle = e => {
    setType(`${e.target.title}`);
  };

  const onArrow = e => {
    typeToggle(e);
    return listRender ? setListRender(false) : setListRender(true);
  };

  const viewPort = useWindowDimensions();

  const day = new Date();

  const startDate = `${day.getDate()}.${
    day.getMonth() + 1
  }.${day.getFullYear()}`;

  useEffect(() => {
    setDate(startDate);
  }, [date]);

  const contextValueBalance = {
    type,
    picker,
    handleCalendarClick,
    closePicker,
    date,
  };
  return (
    <contextProps.Provider value={contextValueBalance}>
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
            {listRender ? (
              <>
                <div className={s.holst}>
                  <ToGoReport />
                </div>
                <div className={s.balanceContainer}>
                  <Balance />
                </div>
                <DateForm
                  date={date}
                  handleCalendarClick={handleCalendarClick}
                  closePicker={closePicker}
                  picker={picker}
                />
                <div className={s.buttonContainer}>
                  <button
                    className={`${s.buttonExpense} ${
                      type === 'expense' && s.buttonSpentIncomeActive
                    }`}
                    onClick={onArrow}
                    title="expense"
                  >
                    РАСХОД
                  </button>
                  <button
                    className={`${s.buttonIncome} ${
                      type === 'income' && s.buttonSpentIncomeActive
                    }`}
                    onClick={onArrow}
                    title="income"
                  >
                    ДОХОД
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className={s.buttonArrowGoBack} onClick={onArrow}>
                  &#8592;
                </button>
                <AddTransaction transactionType={type} date={date} />
              </>
            )}
          </>
        )}
      </Container>
    </contextProps.Provider>
  );
};

export default BalanceView;
