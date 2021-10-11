import React, { useState, useEffect } from 'react';
import s from './Balance.module.css';
import { getTotalBalance } from '../../redux/transactions/transactions-selectors';
import { useSelector, useDispatch } from 'react-redux';
import transactionOp from '../../redux/transactions/transactions-operations';

const Balance = () => {
  const balance = useSelector(getTotalBalance);
  const dispatch = useDispatch();
  const [sum, setSum] = useState('');

  const onHandleChange = e => setSum(e.currentTarget.value);
  useEffect(() => {
    setSum(balance);
  });
  const onhandleSubmit = e => {
    e.preventDefault();
    dispatch(transactionOp.setBalance(sum));
  };
  return (
    <form onSubmit={onhandleSubmit} className={s.reportBalance}>
      <label htmlFor="balans" className={s.balanceLabel}>
        Баланс:
        {balance === 0 ? (
          <>
            <input
              type="text"
              name="name"
              // value={sum}
              onChange={onHandleChange}
              className={s.balanceInpute}
            />
            <button className={s.balanceButton}>ПОДТВЕРДИТЬ</button>
          </>
        ) : (
          <>
            <p className={s.balanceInpute}>{balance.toFixed(2)} UAH</p>
            <button className={s.balanceButton} disabled>
              ПОДТВЕРДИТЬ
            </button>
          </>
        )}
      </label>
    </form>
  );
};
export default Balance;
