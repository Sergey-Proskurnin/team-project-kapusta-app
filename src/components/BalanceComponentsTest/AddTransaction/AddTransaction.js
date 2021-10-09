import { useState } from 'react';
import { useDispatch } from 'react-redux';
import transactionsOperations from 'redux/transactions/transactions-operations';
import CalculatorIcon from 'components/SvgIcons/CalculatorIcon/CalculatorIcon';

import s from './AddTransaction.module.css'

export default function AddTransaction({ transactionType = 'income' }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState(0);

  const startDate = new Date().toLocaleString().split(',')[0]

  console.log(startDate);

  const handleSubmit = e => {
    e.preventDefault();
    const transaction = {
      type: transactionType,
      date,
      category,
      subCategory: description,
      sum,
    };
    dispatch(transactionsOperations.addTransaction(transaction));
    cleanState();
  };

  const handleChangeDate = e => {
    setDate(e.target.value);
  };
  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };
  const handleChangeCategory = e => {
    setCategory(e.target.value);
  };
  const handleChangeSum = e => {
    setSum(e.target.value);
  };
  const cleanState = () => {
    setDate('');
    setDescription('');
    setCategory('');
    setSum(0);
  };
  
  return (
    <div className={s.container}>
    
    <form className={s.containerForm} noValidate>
    <div className={s.dateForm}>
        {startDate}
      </div>
        <label>
        <input
        className={s.inputDescriptions}
          value={description}
          name="description"
          id="description"
          type="text"
          placeholder="Описание товара"
          required
          onChange={handleChangeDescription}
        />
      </label>
      <label>
        <input
        className={s.inputСategory}
          value={category}
          name="category"
          id="description"
          type="text"
          placeholder="Категория товара"
          required
          onChange={handleChangeCategory}
        />
      </label>
      <label>
      <div className={s.positionIcon}>
        <input
          className={s.inputSum}
          value={sum}
          name="sum"
          id="sum"
          type="text"
          placeholder="0,00"
          required
          onChange={handleChangeSum}
        />
        <CalculatorIcon/>
        </div>
      </label>
           <button type="button" onClick={handleSubmit} className={s.button}>
            ВВОД
          </button>
            <button type="button" onClick={handleSubmit} className={s.button}>
            ОЧИСТИТЬ
          </button>
        {/* <Button variant="contained" color="secondary" onClick={handleSubmit}>
          <Typography variant="h3">ВВОД</Typography>
        </Button>
        <Button variant="outlined" color="inherit" onClick={cleanState}>
          <Typography variant="h3">ОЧИСТИТЬ</Typography>
        </Button> */}
    </form>
    </div>
  );
}
