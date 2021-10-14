import React, { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import s from './Report.module.css';
import { useSelector, useDispatch } from 'react-redux';
import months from '../../data/month';
const CurrentMonth = ({ currentMonth, currentYear }) => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const onHandleClickRight = () => {
    if (month < 12) {
      setMonth(prev => (prev += 1));
    } else {
      setMonth(1);
      setYear(prev => (prev += 1));
    }
  };
  const onHandleClickLeft = () => {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  };
  const monthToString = String(month);
  const selectMonth = months.filter(el => el.id === monthToString);
  return (
    <div className={s.reportMonth}>
      <p className={s.title}>Текущий период:</p>
      <div className={s.transactionWrapper}>
        <ArrowBackIosIcon
          style={{ color: '#FF751D', width: '12' }}
          // fontSize="small"
          onClick={onHandleClickLeft}
        />
        {
          <span
            className={s.reportMonthTitle}
          >{`${selectMonth[0].name} ${year}`}</span>
        }

        <ArrowForwardIosIcon
          style={{ color: '#FF751D', width: '12' }}
          onClick={onHandleClickRight}
        />
      </div>
    </div>
  );
};
export default CurrentMonth;
