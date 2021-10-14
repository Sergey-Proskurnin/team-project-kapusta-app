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

const Report = ({
  month,
  year,
  onHandleClickRight,
  onHandleClickLeft,
  getCategory,
}) => {
  const [type, setType] = useState('expense');

  const transaction = useSelector(getTransactionsPerMonth);
  const dispatch = useDispatch();

  const getTransactionByType = type => {
    const filteredByType = transaction.filter(
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

  const onClick = () => {
    if (type === 'expense') {
      setType('income');
    }
    if (type === 'income') {
      setType('expense');
    }
  };
  return (
    <div className={s.reportContainer}>
      <div className={`${s.navigation} ${s.section}`}>
        <ArrowToGoBack />
        <div className={s.navigationWrapper}>
          <Balance hide={s.buttonNone} width={s.buttonWidth} />
          <CurrentMonth
            currentMonth={month}
            currentYear={year}
            onHandleClickRight={onHandleClickRight}
            onHandleClickLeft={onHandleClickLeft}
          />
        </div>
      </div>
      <CurrentAmount currentMonth={month} currentYear={year} />
      <div className={`${s.reportWrapper} ${s.section}`}>
        <div className={s.transactionWrapper}>
          <ArrowBackIosIcon
            style={{ color: '#FF751D' }}
            fontSize="small"
            onClick={onClick}
          />
          {type === 'expense' ? (
            <h1 className={s.reportTitle}>расходы:</h1>
          ) : (
            <h1 className={s.reportTitle}>доходы:</h1>
          )}
          <ArrowForwardIosIcon
            style={{ color: '#FF751D' }}
            fontSize="small"
            onClick={onClick}
          />
        </div>
        <ul className={s.reportList}>
          {categories.map(event => {
            let sum = findeTotalSumByCategiry(type, event.label);
            if (sum === 0) {
              return;
            }
            return (
              <li className={s.reportCard} key={event.id}>
                <p>{sum.toLocaleString('ru')}</p>
                <svg
                  className={s.iconSvg}
                  title={event.label}
                  onClick={getCategory}
                >
                  <use
                    xlinkHref={`${sprite}#${event.label}`}
                    title={event.label}
                  />
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
