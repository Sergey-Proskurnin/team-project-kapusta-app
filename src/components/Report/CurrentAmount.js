import React, { useState, useEffect } from 'react';
import s from './Report.module.css';
// import { result } from '../../data/db-transactions.json';
import { ReactComponent as Strip } from './strip.svg';
import { useSelector, useDispatch } from 'react-redux';
import transactionsOperations from 'redux/transactions/transactions-operations';
import { getTransactionsPerMonth } from '../../redux/transactions/transactions-selectors';

// const month = 2;

const CurrentAmount = ({ currentMonth, currentYear }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(getTransactionsPerMonth);
  let monthToString = String(currentMonth);
  let yearToString = String(currentYear);

  useEffect(() => {
    if ((monthToString, yearToString)) {
      dispatch(
        transactionsOperations.getTransactionsMonthYear(
          monthToString,
          yearToString,
        ),
      );
    }
  }, [currentMonth, currentYear]);

  const findTotalSum = type => {
    let totalSum = 0;
    const filteredType = transactions.filter(
      transaction => transaction.type === type,
    );
    filteredType.map(el => (totalSum += el.sum));
    return totalSum;
  };

  return (
    <div className={`${s.section} ${s.amountSection}`}>
      <div className={`${s.transactionWrapper} ${s.amountwrapper}`}>
        <p className={s.amountTitle}>Расходы:</p>
        <span
          className={`${s.amountText} ${s.amountExpense}`}
        >{`-${findTotalSum('expense').toLocaleString('ru')}.00 грн.`}</span>
      </div>
      <Strip className={s.amountStrip} />
      <div className={`${s.transactionWrapper} ${s.amountwrapper}`}>
        <p className={s.amountTitle}>Доходы:</p>
        <span className={`${s.amountText} ${s.amountIncome}`}>{`+${findTotalSum(
          'income',
        ).toLocaleString('ru')}.00 грн.`}</span>
      </div>
    </div>
  );
};
export default CurrentAmount;
