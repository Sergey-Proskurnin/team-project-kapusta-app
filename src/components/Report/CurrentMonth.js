import React, { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import s from './Report.module.css';
import { useSelector, useDispatch } from 'react-redux';
import months from '../../data/month';

const CurrentMonth = () => {
  let date = new Date();
  let selectedMonth = date.getMonth();
  let selectedYear = date.getFullYear();
  const [month, setMonth] = useState(selectedMonth);
  const [year, setYear] = useState(selectedYear);

  let monthnames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const onHandleClickRight = () => {
    if (month < 11) {
      setMonth(prev => (prev += 1));
    } else {
      selectedMonth = 0;
      selectedYear++;
      setMonth(0);
      setYear(prev => (prev += 1));
    }
  };
  const onHandleClickLeft = () => {
    if (month <= 0) {
      setMonth(11);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };

  return (
    <div>
      <p>Текущий период:</p>
      <div className={s.transactionWrapper}>
        <ArrowBackIosIcon
          style={{ color: '#FF751D' }}
          fontSize="small"
          onClick={onHandleClickLeft}
        />
        <span>{`${monthnames[month]} ${year}`}</span>
        <ArrowForwardIosIcon
          style={{ color: '#FF751D' }}
          fontSize="small"
          onClick={onHandleClickRight}
        />
      </div>
    </div>
  );
};
export default CurrentMonth;
