import React, { useState, useEffect } from 'react';
import s from './Balans.module.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { getTotalBalance } from '../../redux/transactions/transactions-selectors';
import { useSelector, useDispatch } from 'react-redux';
import transactionOp from '../../redux/transactions/transactions-operations';
// import { AccountBalanceRounded } from '@material-ui/icons';

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
    <form onSubmit={onhandleSubmit}>
      <label htmlFor="balans">
        Баланс:{' '}
        <input type="text" name="name" value={sum} onChange={onHandleChange} />
        UAH
        <button className={s}>Подтвердить</button>
      </label>
    </form>
  );
};
export default Balance;
