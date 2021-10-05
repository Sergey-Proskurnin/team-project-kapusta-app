import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import s from './Report.module.css';
import { Icon } from '@material-ui/core';
import foodSvg from './icons/food.svg';
import additionalSvg from './icons/additional.svg';
import alcoholSvg from './icons/alcohol.svg';
import carSvg from './icons/car.svg';
import communalSvg from './icons/communal.svg';
import educationSvg from './icons/education.svg';
import healthSvg from './icons/health.svg';
import kiteSvg from './icons/kite.svg';
import otherSvg from './icons/other.svg';
import sofaSvg from './icons/sofa.svg';
import toolsSvg from './icons/tools.svg';

const Report = () => {
  var date = new Date();
  var months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  var calStart = new Date(2021, 0, 1);
  var month = date.getMonth();
  var year = date.getFullYear();
  return (
    <div className={s.reportContainer}>
      <div className={`${s.navigation} ${s.section}`}>
        <div>
          <ArrowBackIcon style={{ color: '#FF751D' }} />
          <a> Вернуться на главную</a>
        </div>
        <div>
          <label for="balans">
            Баланс: <input type="text" />
            <button className={s.button}>Подтвердить</button>
          </label>
        </div>
        <div>
          <p>Текущий период:</p>
          <div className={s.transactionWrapper}>
            <ArrowBackIosIcon style={{ color: '#FF751D' }} fontSize="small" />
            <span>{`${months[month]} ${year}`}</span>
            <ArrowForwardIosIcon
              style={{ color: '#FF751D' }}
              fontSize="small"
            />
          </div>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.transactionWrapper}>
          <p>Расходы:</p>
          <span>{`-summ грн.`}</span>
        </div>
        <div className={s.transactionWrapper}>
          <p>Доходы:</p>
          <span>{`+summ грн.`}</span>
        </div>
      </div>
      <div className={`${s.reportWrapper} ${s.section}`}>
        <div className={s.transactionWrapper}>
          <ArrowBackIosIcon style={{ color: '#FF751D' }} fontSize="small" />
          <h1>Расходы:</h1>

          <ArrowForwardIosIcon style={{ color: '#FF751D' }} fontSize="small" />
        </div>
        <ul className={s.reportList}>
          <li className={s.reportCard}>
            <p>5000</p>
            <img src={foodSvg} alt="React Logo" />
            <p>Продукты</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={alcoholSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={kiteSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={healthSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={carSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={sofaSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={toolsSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={communalSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={educationSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={educationSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
          <li className={s.reportCard}>
            <p>200</p>
            <img src={otherSvg} alt="React Logo" />
            <p>Алкоголь</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Report;
