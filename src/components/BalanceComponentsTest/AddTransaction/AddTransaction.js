import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import transactionsOperations from 'redux/transactions/transactions-operations';
import CalculatorIcon from 'components/SvgIcons/CalculatorIcon/CalculatorIcon';
import СalendarIcon from 'components/SvgIcons/СalendarIcon';
import contextProps from 'context/context';

import useWindowDimensions from 'hooks/useWindowDimensions';

import s from './AddTransaction.module.css';

import Dropdown from 'components/Dropdown';

import CalendarPicker from 'components/DayPicker/DayPicker';

export default function AddTransaction({ transactionType, date, changeDate }) {
  const type = useContext(contextProps);
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState(0);

  const [picker, setPicker] = useState(false);

  const viewPort = useWindowDimensions();

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
  // const handleChangeDate = e => {
  //   changeDate(e.target.value);
  // };
  const handleCalendarClick = () => {
    setPicker(true);
  };
  const closePicker = dateNew => {
    const newDate = `${dateNew.getUTCDate()}.${
      dateNew.getUTCMonth() + 1
    }.${dateNew.getUTCFullYear()}`;

    changeDate(newDate);
    setPicker(false);
  };
  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleChangeSum = e => {
    setSum(e.target.value);
  };
  const cleanState = () => {
    // handleChangeDate('');
    setDescription('');
    setCategory('');
    setSum(0);
  };

  //FIXME: Рендер для таблета и изменения атребутов инпута для таблета
  return (
    <>
      {viewPort.width >= 1280 && (
        <>
          <form className={s.containerForm} noValidate>
            <div className={s.dateForm}>
              <div onClick={handleCalendarClick}>
                <СalendarIcon />
                {picker && (
                  <CalendarPicker closeHandler={closePicker} startDate={date} />
                )}
              </div>
              <p>{date}</p>
            </div>
            <div className={s.inputForm}>
              <label className={s.labelDescriptions}>
                <input
                  className={s.inputDescriptions}
                  value={description}
                  name="description"
                  id="description"
                  type="text"
                  placeholder={type === 'expense' ? "Описание товара" : "Описание дохода"}
                  required
                  onChange={handleChangeDescription}
                />
              </label >
              <label className={s.labelSelect}>
                <div className={s.positionIcon}>
                  <Dropdown category={category} setCategory={setCategory} />
                </div>
              </label>
              <label className={s.labelSum}>
                <div className={s.positionIcon}>
                  <input
                    className={s.inputSum}
                    value={sum}
                    name="sum"
                    id="sum"
                    type="string"
                    maxLength="10"
                    placeholder="0.00"
                    required
                    onChange={handleChangeSum}
                  />
                  <CalculatorIcon />
                </div>
              </label>
            </div>
            <div className={s.positionButton}>
              <button
                type="button"
                onClick={handleSubmit}
                className={`${s.button} ${s.buttonLeft}`}
              >
                ВВОД
              </button>
              <button
                type="button"
                onClick={cleanState}
                className={`${s.button} ${s.buttonRight}`}
              >
                ОЧИСТИТЬ
              </button>
            </div>
          </form>
        </>
      )}
      {viewPort.width >= 768 && viewPort.width < 1280 && (
        <>
          <div className={'s'}>
            <form className={s.containerForm768} noValidate>
              <div className={s.containerFormTablet}>
                <div className={s.dateForm}>
                  <div onClick={handleCalendarClick}>
                    <СalendarIcon />
                    {picker && (
                      <CalendarPicker
                        closeHandler={closePicker}
                        startDate={date}
                      />
                    )}
                  </div>
                  <p>{date}</p>
                </div>
                <div className={s.inputForm}>
                  <label className={s.labelDescriptions}>
                    <input
                      className={s.inputDescriptions}
                      value={description}
                      name="description"
                      id="description"
                      type="text"
                      placeholder={type === 'expense' ? "Описание товара" : "Описание дохода"}
                      required
                      onChange={handleChangeDescription}
                    />
                  </label>
                  <label className={s.labelSelect}>
                    <div className={s.positionIcon}>
                      <Dropdown category={category} setCategory={setCategory} />
                    </div>
                  </label>
                  <label className={s.labelSum}>
                    <div className={s.positionIcon}>
                      <input
                        className={s.inputSum}
                        value={sum}
                        name="sum"
                        id="sum"
                        type="string"
                        placeholder="0.00"
                        required
                        onChange={handleChangeSum}
                      />
                      <CalculatorIcon />
                    </div>
                  </label>
                </div>
              </div>
              <div className={s.positionButton}>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`${s.button} ${s.buttonLeft}`}
                >
                  ВВОД
                </button>
                <button
                  type="button"
                  onClick={cleanState}
                  className={`${s.button} ${s.buttonRight}`}
                >
                  ОЧИСТИТЬ
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      {viewPort.width < 768 && (
        <>
          <div className={'s'}>
            <form className={s.containerForm320} noValidate>
              <div className={s.containerFormTablet}>
                <div className={s.dateForm}>
                  <p>{date}</p>
                  <div className={s.calendarOverley} onClick={handleCalendarClick}>
                    <СalendarIcon />
                    {picker && (
                      <CalendarPicker
                        closeHandler={closePicker}
                        startDate={date}
                      />
                    )}
                  </div>
                </div>
                <div className={s.inputForm}>
                  <label>
                    <input
                      className={s.inputDescriptions}
                      value={description}
                      name="description"
                      id="description"
                      type="text"
                      placeholder={type === 'expense' ? "Описание товара" : "Описание дохода"}
                      required
                      onChange={handleChangeDescription}
                    />
                  </label>
                  <label>
                    <div className={'s'}>
                      <Dropdown category={category} setSelected={setCategory} />
                    </div>
                  </label>
                  <label>
                    <div className={s.positionInputSum}>
                      <div>
                        <input
                          className={s.inputSum}
                          value={sum}
                          name="sum"
                          id="sum"
                          type="string"
                          placeholder="0.00"
                          required
                          onChange={handleChangeSum}
                        />
                      </div>
                      <div className={s.positionIcon}>
                        <CalculatorIcon />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className={s.positionButton}>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`${s.button} ${s.buttonLeft}`}
                >
                  ВВОД
                </button>
                <button
                  type="button"
                  onClick={cleanState}
                  className={`${s.button} ${s.buttonRight}`}
                >
                  ОЧИСТИТЬ
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
