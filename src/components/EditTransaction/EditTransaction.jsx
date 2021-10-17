import { useState, useRef, useEffect } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Dropdown from 'components/Dropdown';
import CalculatorInput from 'components/CalculatorInput';
import CalculatorIcon from 'components/SvgIcons/CalculatorIcon/CalculatorIcon';
import DateForm from 'components/DateForm';
import transactionsOperations from 'redux/transactions/transactions-operations';
import s from './EditTransaction.module.css';
import { useDispatch } from 'react-redux';

export default function EditTransaction({
  transaction,
  cancelChanges,
  onDateChange,
}) {
  const ref = useRef();
  const dispatch = useDispatch();
  const [date, setDate] = useState(transaction.date);
  const [subCategory, setSubCategory] = useState(transaction.subCategory);
  const [category, setCategory] = useState(transaction.category);
  const [sum, setSum] = useState(transaction.sum);

  const [picker, setPicker] = useState(false);
  const [calc, setCalc] = useState(false);

  useOnClickOutside(ref, cancelChanges);
  useEffect(() => {
     window.document.body.style.overflowY = 'hidden';
    return () => { window.document.body.style.overflowY = 'visible' };
  }
  
)
   

  const handleCalendarClick = () => {
    setPicker(true);
  };
  const handleCalcClick = () => {
    setCalc(true);
  };

  const closeCalc = result => {
    setSum(result);

    setCalc(false);
  };

  const handleChangeDescription = e => {
    setSubCategory(e.target.value);
  };

  const handleChangeSum = e => {
    setSum(e.target.value);
  };

  const closePicker = dateNew => {
    const newDate = `${dateNew.getUTCDate()}.${
      dateNew.getUTCMonth() + 1
    }.${dateNew.getUTCFullYear()}`;

    setDate(newDate);
    setPicker(false);
  };

  const handleEdit = e => {
    e.preventDefault();
    const editedTransaction = Object.assign(
      { ...transaction },
      { date, category, subCategory, sum },
    );

    onDateChange(date);
    dispatch(transactionsOperations.editTransaction(editedTransaction));
    cancelChanges();
  };

  return (
    <div className={s.editModalWrapper}>
      <form className={s.editForm} ref={ref}>
        <span className={s.closeIcon} onClick={cancelChanges}>
          &#10006;
        </span>
        <div className={s.inputsWrapper}>
          <div className={s.dateWrapper}>
            <DateForm
              date={date}
              handleCalendarClick={handleCalendarClick}
              closePicker={closePicker}
              picker={picker}
              align={s.pickerWrapper}
            />
          </div>
          <label className={s.editLabels}>
            <input
              className={s.editInput}
              value={subCategory}
              name="description"
              id="description"
              type="text"
              required
              onChange={handleChangeDescription}
            />
          </label>
          <label className={s.editLabels}>
            <div className={s.selectWrapper}>
              <Dropdown category={category} setCategory={setCategory} />
            </div>
          </label>
          <label className={s.editLabels}>
            <div className="">
              <input
                className={s.editInput}
                value={sum}
                name="sum"
                id="sum"
                type="string"
                maxLength="10"
                placeholder="0.00"
                required
                onChange={handleChangeSum}
              />
              <div onClick={handleCalcClick} className={s.inputSum}>
                <div className={s.calcIcon}>
                  <CalculatorIcon />
                </div>
                {calc && (
                  <CalculatorInput
                    onCloseCalculator={closeCalc}
                    position={s.calc}
                  />
                )}
              </div>
            </div>
          </label>
        </div>
        <div className={s.buttonContainer}>
          <button type="submit" className={s.buttonOk} onClick={handleEdit}>
            ВВОД
          </button>
          <button
            type="button"
            onClick={cancelChanges}
            className={s.buttonCancel}
          >
            НАЗАД
          </button>
        </div>
      </form>
    </div>
  );
}
