import React, { useState, useEffect } from 'react';
import s from './Balance.module.css';
import { getTotalBalance } from '../../redux/transactions/transactions-selectors';
import { useSelector, useDispatch } from 'react-redux';
import transactionOp from '../../redux/transactions/transactions-operations';

const Balance = ({ hide, width }) => {
  const balance = useSelector(getTotalBalance);
  const dispatch = useDispatch();
  const [sum, setSum] = useState('');

  const onHandleChange = e => setSum(e.currentTarget.value);
  useEffect(() => {
    setSum(balance);
  }, []);
  const onhandleSubmit = e => {
    e.preventDefault();
    dispatch(transactionOp.setBalance(sum));
  };
  return (
    <form onSubmit={onhandleSubmit} className={s.reportBalance}>
      <label htmlFor="balans" className={s.balanceLabel}>
        Баланс:
        <div className={s.buttonsGroup}>
           {balance === 0 ? (
          <>
            <input
              type="text"
              name="name"
              maxLength="10"
              placeholder="00.00"
              // value={sum}
              onChange={onHandleChange}
              className={s.balanceInpute}
            />
            <button className={`${s.balanceButton} ${width}`}>
              ПОДТВЕРДИТЬ
            </button>
          </>
        ) : (
          <>
            <p className={`${s.balanceInput} ${width}`}>
              {`${balance.toLocaleString('ru')}.00`} UAH
            </p>
            <button className={`${s.balanceButton} ${hide}`} disabled>
            ПОДТВЕРДИТЬ
            </button>
          </>
        )}
        </div>
       
      </label>
    </form>
  );
};
export default Balance;
