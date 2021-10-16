import { useEffect, useState, useRef } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

import s from './Calculator.module.css';

export default function CalculatorInput({ onCloseCalculator }) {
  const ref = useRef();
  const [result, setResult] = useState('');
  const [close, setClose] = useState(false);
  useEffect(() => {
    if (close) {
      onCloseCalculator(result);
    }
  });
  useOnClickOutside(ref, () => onCloseCalculator(result));

  const handleConfirm = e => {
    e.preventDefault();
    setClose(true);
  };
  function handleclick(e) {
    e.preventDefault();
    setResult(result.concat(e.target.name));
  }
  function backspace(e) {
    e.preventDefault();
    setResult(result.slice(0, result.length - 1));
  }
  function clear(e) {
    e.preventDefault();
    setResult('');
  }

  function calculate(e) {
    e.preventDefault();
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  }
  return (
    <div className={s.calc} ref={ref}>
      <input type="text" value={result} className={s.calcInput} readOnly />

      <div className={s.keypad}>
        <button
          type="button"
          name="1"
          onClick={handleclick}
          className={s.calcBtn}
        >
          1
        </button>
        <button
          type="button"
          name="2"
          onClick={handleclick}
          className={s.calcBtn}
        >
          2
        </button>
        <button
          type="button"
          name="3"
          onClick={handleclick}
          className={s.calcBtn}
        >
          3
        </button>
        <button
          type="button"
          name="+"
          onClick={handleclick}
          className={s.calcBtn}
        >
          +
        </button>
        <button
          type="button"
          name="4"
          onClick={handleclick}
          className={s.calcBtn}
        >
          4
        </button>
        <button
          type="button"
          name="5"
          onClick={handleclick}
          className={s.calcBtn}
        >
          5
        </button>
        <button
          type="button"
          name="6"
          onClick={handleclick}
          className={s.calcBtn}
        >
          6
        </button>
        <button
          type="button"
          name="-"
          onClick={handleclick}
          className={s.calcBtn}
        >
          -
        </button>
        <button
          type="button"
          name="7"
          onClick={handleclick}
          className={s.calcBtn}
        >
          7
        </button>
        <button
          type="button"
          name="8"
          onClick={handleclick}
          className={s.calcBtn}
        >
          8
        </button>
        <button
          type="button"
          name="9"
          onClick={handleclick}
          className={s.calcBtn}
        >
          9
        </button>
        <button
          type="button"
          name="*"
          onClick={handleclick}
          className={s.calcBtn}
        >
          *
        </button>
        <button
          type="button"
          name="0"
          onClick={handleclick}
          className={s.calcBtn}
        >
          0
        </button>
        <button
          type="button"
          name="/"
          onClick={handleclick}
          className={s.calcBtn}
        >
          /
        </button>
        <button type="button" onClick={clear} className={s.calcBtn}>
          C
        </button>
        <button type="button" onClick={backspace} className={s.calcBtn}>
          &#8592;
        </button>
        <button
          type="button"
          id="result"
          onClick={calculate}
          className={s.result}
        >
          =
        </button>
        <button
          type="button"
          id="result"
          onClick={handleConfirm}
          className={s.confirmBtn}
        >
          Подтвердить
        </button>
      </div>
    </div>
  );
}
