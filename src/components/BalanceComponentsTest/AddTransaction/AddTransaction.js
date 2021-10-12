import { useState } from 'react';
import { useDispatch } from 'react-redux';
import transactionsOperations from 'redux/transactions/transactions-operations';
import CalculatorIcon from 'components/SvgIcons/CalculatorIcon/CalculatorIcon';
import СalendarIcon from 'components/SvgIcons/СalendarIcon';
import { ReactComponent as ArrowUp } from 'components/SvgIcons/ArrowUp/arrowDown.svg';
import ArrowDown from 'components/SvgIcons/ArrowDown';
import CustomSelect from 'components/CustomSelect';

import useWindowDimensions from 'hooks/useWindowDimensions';

import s from './AddTransaction.module.css';

import Select from 'react-select';

import st from 'components/CustomSelect/CustomSelect.module.css';
import options from 'data/categories.json';

export default function AddTransaction({
  transactionType,
  date,
  //  changeDate
}) {
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState(0);

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
  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  const handleChangeCategory = e => {
    setCategory(e.label);
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

  const customStyles = {
    control: (base, state) => ({
      ...base,
      width: 188,
      height: 44,
      border: '2px solid #F5F6FB',
      background: '#FFFFFF',
      // match with the menu
      borderRadius: state.isFocused ? '0px 0px 0 0' : 0,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? '#F5F6FB' : '#F5F6FB',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? '#F5F6FB' : '#F5F6FB',
      },
    }),
    menuList: styles => ({
      ...styles,
      background: 'white',
      color: '#C7CCDC',
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      color: '52555F',
      background: isFocused ? 'orange' : isSelected ? '#FFFFFF' : undefined,
      zIndex: 1,
    }),
    menu: base => ({
      ...base,
      margin: 0,
      zIndex: 100,
    }),
  };

  return (
    <>
      {viewPort.width >= 1280  && (
        <>
          <div className={'s'}>
            <form className={s.containerForm} noValidate>
              <div className={s.dateForm}>
                {/* <label>
                  <input
                    className={s.inputDescriptions}
                    type="date"
                    placeholder="2017-06-01"
                  />
                </label> */}
                <СalendarIcon />
                <p>{date}</p>
              </div>
              <div className={s.inputForm}>
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
                  <div className={'s'}>
                    <Select
                      onChange={handleChangeCategory}
                      styles={customStyles}
                      options={options}
                      placeholder="Категория товара"
                      className={st.select}
                      categoryType={transactionType}
                      isSearchable
                    />
                    {/* <input
              className={s.inputСategory}
              value={category}
              name="category"
              id="description"
              type="text"
              placeholder="Категория товара"
              required
              onChange={handleChangeCategory}
            />
            <ArrowUp className={s.iconForm}/> */}
                  </div>
                </label>
                <label>
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
              <div>
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
      ) } 
      {viewPort.width >=768 && viewPort.width < 1280 &&(
        <>
          <div className={'s'}>
            <form className={s.containerForm768} noValidate>
              <div className={s.containerFormTablet}>
                <div className={s.dateForm}>
                  {/* <label>
                    <input
                      className={s.inputDescriptions}
                      type="date"
                      placeholder="2017-06-01"
                    />
                  </label> */}
                  <СalendarIcon />
                  <p>{date}</p>
                </div>
                <div className={s.inputForm}>
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
                    <div className={'s'}>
                      <Select
                        onChange={handleChangeCategory}
                        styles={customStyles}
                        options={options}
                        placeholder="Категория товара"
                        className={st.select}
                        isSearchable
                      />
                      {/* <input
              className={s.inputСategory}
              value={category}
              name="category"
              id="description"
              type="text"
              placeholder="Категория товара"
              required
              onChange={handleChangeCategory}
            />
            <ArrowUp className={s.iconForm}/> */}
                    </div>
                  </label>
                  <label>
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
              <div className={s.positionButton768}>
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
      )
      }
{viewPort.width < 768 && ( 
  <>
  <div className={'s'}>
  <form className={s.containerForm320} noValidate>
    <div className={s.containerFormTablet}>
      <div className={s.dateForm}>
        {/* <label>
          <input
            className={s.inputDescriptions}
            type="date"
            placeholder="2017-06-01"
          />
        </label> */}
        
        <p>{date}</p>
        <СalendarIcon />
      </div>
      <div className={s.inputForm}>
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
          <div className={'s'}>
            <Select
              onChange={handleChangeCategory}
              styles={customStyles}
              options={options}
              placeholder="Категория товара"
              className={st.select}
              isSearchable
            />
            {/* <input
    className={s.inputСategory}
    value={category}
    name="category"
    id="description"
    type="text"
    placeholder="Категория товара"
    required
    onChange={handleChangeCategory}
  />
  <ArrowUp className={s.iconForm}/> */}
          </div>
        </label>
        <label>
          <div className={s.positionInputSum}>
            <div><input
              className={s.inputSum}
              value={sum}
              name="sum"
              id="sum"
              type="string"
              placeholder="0.00"
              required
              onChange={handleChangeSum}
            /></div>
            <div className={s.positionIcon}><CalculatorIcon /></div>
          </div>
        </label>
      </div>
    </div>
    <div className={s.positionButton320}>
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
)
}

    </>
  );
}
