import { useState } from 'react';
import { useDispatch } from 'react-redux';
import transactionsOperations from 'redux/transactions/transactions-operations';

export default function AddTransaction({ transactionType = 'income' }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState(0);

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
    <form className="addTransaction">
      <label>
        <input
          value={date}
          name="date"
          id="date"
          type="text"
          placeholder="15 октябрь 2021"
          required
          title="Формат даты: 15-октябрь-2021. Дата должна состоять из числа(день), названия месяца в именительном падеже и годы в формате 2021"
          onChange={handleChangeDate}
        />
      </label>
      <label>
        <input
          value={description}
          name="description"
          id="description"
          type="text"
          placeholder="Описание дохода"
          required
          onChange={handleChangeDescription}
        />
      </label>
      <label>
        <input
          value={category}
          name="category"
          id="description"
          type="text"
          placeholder="Выберите категорию дохода"
          required
          onChange={handleChangeCategory}
        />
      </label>
      <label>
        <input
          value={sum}
          name="sum"
          id="sum"
          type="number"
          placeholder="0,00"
          required
          onChange={handleChangeSum}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        ввод
      </button>
      {/* <input type="reset" /> */}
      <button type="button" onClick={cleanState}>
        очистить
      </button>
    </form>
  );
}
