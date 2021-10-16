import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import s from './TransactionsListMobile.module.css';

export default function TransactionsListMobile({ transactionType, date }) {
  const dispatch = useDispatch();
  const transactions = useSelector(selectors.getTransactionsPerDay);

  console.log(transactions);

  useEffect(() => {
    if (date) {
      dispatch(transactionsOperations.getTransactionsDay(date));
    }
  }, [date]);
  const deleteTransaction = transaction => {
    dispatch(transactionsOperations.deleteTransaction(transaction));
  };

  return (
    <div className={s.tsList__container}>
      <ul style={{ width: '100%', padding: 0 }}>
        {transactions.map(transaction => (
          <div className={s.firstWrapper}>
            <li key={transaction._id} className={s.listItem}>
              <div className={s.listItem__wrapper}>
                <p className={s.listItem__subCategory}>
                  {transaction.subCategory}
                </p>
                <div className={s.dateCategory__wrapper}>
                  <p className={s.listItem__date}>{transaction.date}</p>
                  <p className={s.listItem__category}>{transaction.category}</p>
                </div>
              </div>
              <div className={s.listItem__sumWrapper}>
                <p
                  className={s.listItem__sum}
                  style={
                    transaction.type === 'income'
                      ? { color: '#407946' }
                      : { color: '#E7192E' }
                  }
                >
                  {transaction.type === 'income'
                    ? transaction.sum
                    : `- ${transaction.sum}`}
                </p>
              </div>
              <div className="buttonWrapper">
                <button
                  className={s.buttonsGroup}
                  onClick={() => deleteTransaction(transaction)}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#a)" fill="#52555F">
                      <path d="m16.308 4.023-.397-1.191a1.109 1.109 0 0 0-1.053-.759h-3.34V.986A.987.987 0 0 0 10.532 0H7.473a.987.987 0 0 0-.985.986v1.087h-3.34c-.478 0-.901.305-1.053.759l-.397 1.191a.894.894 0 0 0 .846 1.174h.415l.915 11.307c.068.839.78 1.496 1.62 1.496h7.203c.84 0 1.553-.657 1.62-1.496l.915-11.307h.23a.894.894 0 0 0 .846-1.174ZM7.543 1.055h2.92v1.018h-2.92V1.055Zm5.723 15.364a.575.575 0 0 1-.57.526H5.496a.575.575 0 0 1-.57-.526L4.017 5.197h10.157l-.908 11.222ZM2.77 4.143l.326-.977a.055.055 0 0 1 .052-.038h11.71c.024 0 .045.015.052.038l.326.977H2.77Z" />
                      <path d="m11.585 16.381.027.001a.527.527 0 0 0 .527-.5l.495-9.506a.527.527 0 0 0-1.054-.055l-.495 9.506a.527.527 0 0 0 .5.554ZM5.891 15.883a.527.527 0 0 0 1.053-.057L6.426 6.32a.527.527 0 1 0-1.054.057l.519 9.506ZM9.009 16.382a.527.527 0 0 0 .527-.527V6.348a.527.527 0 1 0-1.054 0v9.507c0 .29.236.527.527.527Z" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h18v18H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  className={s.buttonsGroup}
                  // onClick={() => deleteTransaction(transaction)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 226 226"
                  >
                    <path d="M0 226V0h226v226z" fill="none" />
                    <path
                      d="M175 2c-6 0-11 2-14 6l-9 9 57 57 9-9c8-7 8-20 0-28L189 8c-4-4-9-6-14-6zm-33 23-14 13 60 60 14-13zm-22 22-94 93-5 6-20 68c-1 3 0 6 2 9 3 2 6 3 9 2l68-20c3-1 6-3 7-6l93-92-13-13-95 96-39 11-8-8 12-40 94-94zm20 21-95 96 14 3 2 13 95-96z"
                      fill="#52555f"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
