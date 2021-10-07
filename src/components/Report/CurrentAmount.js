import React, { useState, useEffect } from 'react';
import s from './Report.module.css';

const CurrentAmount = () => {
  return (
    <div className={s.section}>
      <div className={s.transactionWrapper}>
        <p>Расходы:</p>
        <span>{`-summ грн.`}</span>
      </div>
      <div className={s.transactionWrapper}>
        <p>Доходы:</p>
        <span>{`+summ грн.`}</span>
      </div>
    </div>
  );
};
export default CurrentAmount;
