import React, { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Balance from '../Balance';
import s from './Report.module.css';
import { useSelector, useDispatch } from 'react-redux';
import transactionOp from '../../redux/transactions/transactions-operations';
import { getTransactionsPerMonth } from '../../redux/transactions/transactions-selectors';
import { result } from '../../data/db-transactions.json';
import { CurrentAmount, CurrentMonth } from './';
import categories from '../../data/categories';
import sprite from './icon.svg';
import ArrowToGoBack from '../ArrowToGoBack';
const stat = ['Расходы', 'Доходы'];

const month = 2;

const Report = () => {
  const transaction = useSelector(getTransactionsPerMonth);
  const dispatch = useDispatch();

  const filteredByMonth = result.filter(
    transaction => transaction.month === month,
  );
  const getTransactionByType = type => {
    const filteredByType = filteredByMonth.filter(
      transaction => transaction.type === type,
    );
    return filteredByType;
  };

  const findeTotalSumByCategiry = (type, category) => {
    let totalExpense = 0;
    getTransactionByType(type)
      .filter(tr => tr.category === category)
      .map(el => {
        totalExpense += el.sum;
      });
    return totalExpense;
  };

  return (
    <div className={s.reportContainer}>
      <div className={`${s.navigation} ${s.section}`}>
        <ArrowToGoBack />
        <div className={s.navigationWrapper}>
          <Balance />
          <CurrentMonth />
        </div>
      </div>
      <CurrentAmount />
      <div className={`${s.reportWrapper} ${s.section}`}>
        <div className={s.transactionWrapper}>
          <ArrowBackIosIcon style={{ color: '#FF751D' }} fontSize="small" />

          <h1>Расходы:</h1>
          <ArrowForwardIosIcon style={{ color: '#FF751D' }} fontSize="small" />
        </div>
        <ul className={s.reportList}>
          {categories.map(event => {
            let sum = findeTotalSumByCategiry('expense', event.label);
            if (sum === 0) {
              return;
            }
            return (
              <li className={s.reportCard} key={event.id}>
                <p>{sum}</p>
                <svg className={s.iconSvg}>
                  <use xlinkHref={`${sprite}#${event.label}`} />{' '}
                </svg>
                <p className={s.reportCardTitle}>{event.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Report;
