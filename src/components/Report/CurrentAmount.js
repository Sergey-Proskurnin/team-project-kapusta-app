import React, { useState, useEffect } from 'react';
import s from './Report.module.css';
import { result } from '../../data/db-transactions.json';
import { ReactComponent as Strip } from './strip.svg';
const month = 2;

const CurrentAmount = () => {
  const filteredByMonth = result.filter(
    transaction => transaction.month === month,
  );
  let totalSum = 0;
  const findTotalSum = type => {
    const filteredType = filteredByMonth.filter(
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
        >{`-${findTotalSum('expense')}.00 грн.`}</span>
      </div>
      <Strip className={s.amountStrip} />
      <div className={`${s.transactionWrapper} ${s.amountwrapper}`}>
        <p className={s.amountTitle}>Доходы:</p>
        <span className={`${s.amountText} ${s.amountIncome}`}>{`+${findTotalSum(
          'income',
        )}.00 грн.`}</span>
      </div>
    </div>
  );
};
export default CurrentAmount;
