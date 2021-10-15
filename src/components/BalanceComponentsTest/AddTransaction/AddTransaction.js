import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import transactionsOperations from 'redux/transactions/transactions-operations';
import CalculatorIcon from 'components/SvgIcons/CalculatorIcon/CalculatorIcon';
import contextProps from 'context/context';
import DateForm from 'components/DateForm';
import useWindowDimensions from 'hooks/useWindowDimensions';

import s from './AddTransaction.module.css';

import Dropdown from 'components/Dropdown';

import CalculattorInput from 'components/CalculatorInput/CalculatorInput';

export default function AddTransaction() {
  const { type, picker, handleCalendarClick, closePicker, date } =
    useContext(contextProps);
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const [calc, setCalc] = useState(false);
  const [sum, setSum] = useState('');

  const viewPort = useWindowDimensions();

  const handleSubmit = e => {
    e.preventDefault();
    const transaction = {
      type: type,
      date,
      category,
      subCategory: description,
      sum,
    };
    dispatch(transactionsOperations.addTransaction(transaction));
    cleanState();
  };

  const handleCalcClick = () => {
    setCalc(true);
  };

  const closeCalc = result => {
    setSum(result);

    setCalc(false);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleChangeSum = e => {
    setSum(e.target.value);
  };
  const cleanState = () => {
    setDescription('');
    setCategory('');
    setSum('');
  };

  return (
    <>
      {viewPort.width >= 1280 && (
        <>
          <form onSubmit={handleSubmit} className={s.containerForm}>
            <DateForm
              date={date}
              handleCalendarClick={handleCalendarClick}
              closePicker={closePicker}
              picker={picker}
            />
            <div className={s.inputForm}>
              <label className={s.labelDescriptions}>
                <input
                  className={s.inputDescriptions}
                  value={description}
                  name="description"
                  id="description"
                  type="text"
                  placeholder={
                    type === 'expense' ? 'Описание товара' : 'Описание дохода'
                  }
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
                    maxLength="10"
                    placeholder="0.00"
                    required
                    onChange={handleChangeSum}
                  />
                  <div onClick={handleCalcClick}>
                    <div className={s.calculatorIcon}>
                      <CalculatorIcon />
                    </div>
                    {calc && <CalculattorInput onCloseCalculator={closeCalc} />}
                  </div>
                </div>
              </label>
            </div>
            <div className={s.positionButton}>
              <button type="submit" className={`${s.button} ${s.buttonLeft}`}>
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
          <div>
            <form onSubmit={handleSubmit} className={s.containerForm768}>
              <div className={s.containerFormTablet}>
                <DateForm
                  date={date}
                  handleCalendarClick={handleCalendarClick}
                  closePicker={closePicker}
                  picker={picker}
                />
                <div className={s.inputForm}>
                  <label className={s.labelDescriptions}>
                    <input
                      className={s.inputDescriptions}
                      value={description}
                      name="description"
                      id="description"
                      type="text"
                      placeholder={
                        type === 'expense'
                          ? 'Описание товара'
                          : 'Описание дохода'
                      }
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
                      <div onClick={handleCalcClick}>
                        <CalculatorIcon />
                        {calc && (
                          <CalculattorInput onCloseCalculator={closeCalc} />
                        )}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className={s.positionButton}>
                <button type="submit" className={`${s.button} ${s.buttonLeft}`}>
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
          <div>
            <form onSubmit={handleSubmit} className={s.containerForm320}>
              <div className={s.containerFormTablet}>
                <div className={s.inputForm}>
                  <label>
                    <input
                      className={s.inputDescriptions}
                      value={description}
                      name="description"
                      id="description"
                      type="text"
                      placeholder={
                        type === 'expense'
                          ? 'Описание товара'
                          : 'Описание дохода'
                      }
                      required
                      onChange={handleChangeDescription}
                    />
                  </label>
                  <label>
                    <div>
                      <Dropdown category={category} setCategory={setCategory} />
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
                        <div onClick={handleCalcClick}>
                          <CalculatorIcon />
                          {calc && (
                            <CalculattorInput onCloseCalculator={closeCalc} />
                          )}
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className={s.positionButton}>
                <button type="submit" className={`${s.button} ${s.buttonLeft}`}>
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
