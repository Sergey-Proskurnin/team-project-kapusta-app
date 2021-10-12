
import CalculatorIcon from 'components/SvgIcons/CalculatorIcon/CalculatorIcon';
import СalendarIcon from 'components/SvgIcons/СalendarIcon';
// import s from './MobileAddTransation,module.css'
import Select from 'react-select';
import st from 'components/CustomSelect/CustomSelect.module.css';




const MobileAddTransaction = ({date, s, description, handleChangeDescription, handleChangeCategory, customStyles, options, sum, handleChangeSum, handleSubmit, cleanState }) =>{
    return (
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

    )
}

export default MobileAddTransaction
