import s from './Dropdown.module.css';
import { useState } from 'react';

const options = [
  'Транспорт',
  'Продукты',
  'Здоровье',
  'Алкоголь',
  'Развлечения',
  'Всё для дома',
  'Техника',
  'Коммуналка, связь',
  'Образование',
  'Спорт, хобби',
  'Прочее',
  'Заработная плата',
  'Доп.доход',
];

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.dropdown}>
      <div
        tabIndex="0"
        className={s.dropdownBtn}
        onClick={e => setIsActive(!isActive)}
      >
        {!selected ? 'Категория товара' : selected}
        {!isActive ? (
          <svg
            className={s.crownSvg}
            width="12"
            height="7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m1 1 5 4 5-4" stroke="#C7CCDC" stroke-width="2" />
          </svg>
        ) : (
          <svg
            className={s.crownSvg}
            width="12"
            height="7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 6 5-4 5 4"
              stroke="#C7CCDC"
              stroke-width="2"
              className="crownUp"
            />
          </svg>
        )}
      </div>

      {isActive && (
        <div className={s.dropdownContent}>
          {options.map(option => (
            <div
              onClick={e => {
                setSelected(option);
                setIsActive(false);
              }}
              className={s.dropdownItem}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
