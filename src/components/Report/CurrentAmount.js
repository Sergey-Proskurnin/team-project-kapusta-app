import React, { useState, useEffect } from 'react';
import s from './Report.module.css';
import { result } from '../../data/db-transactions.json';
const month = 3;

const CurrentAmount = () => {
  const filteredByMonth = result.filter(
    transaction => transaction.month === month,
  );
  const filteredIncome = filteredByMonth.filter(
    transaction => transaction.type === 'income',
  );
  const filteredExpense = filteredByMonth.filter(
    transaction => transaction.type === 'expense',
  );
  let totalIncome = 0;
  let totalExpense = 0;
  const totalSumIncome = filteredIncome.map(el => {
    totalIncome += el.sum;
  });
  const totalSumExpence = filteredExpense.map(el => {
    totalExpense += el.sum;
  });

  return (
    <div className={s.section}>
      <div className={s.transactionWrapper}>
        <p>Расходы:</p>
        <span>{`-${totalExpense.toFixed(2)} грн.`}</span>
      </div>
      <div className={s.transactionWrapper}>
        <p>Доходы:</p>
        <span>{`+${totalIncome.toFixed(2)} грн.`}</span>
      </div>
    </div>
  );
};
export default CurrentAmount;
