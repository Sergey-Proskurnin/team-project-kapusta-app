import React from 'react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import s from './Report.module.css';

import months from 'data/month';

const CurrentMonth = ({
  currentMonth,
  currentYear,
  onHandleClickRight,
  onHandleClickLeft,
}) => {
  const monthToString = String(currentMonth);
  const selectMonth = months.filter(el => el.id === monthToString);
  return (
    <div className={s.reportMonth}>
      <p className={s.title}>Текущий период:</p>
      <div className={s.transactionWrapper}>
        <ArrowBackIosIcon
          style={{ color: '#FF751D', width: '12' }}
          onClick={onHandleClickLeft}
        />
        {
          <span
            className={s.reportMonthTitle}
          >{`${selectMonth[0].name} ${currentYear}`}</span>
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
