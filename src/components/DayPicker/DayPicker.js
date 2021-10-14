import { useEffect, useState, useRef } from 'react';
import DayPicker, { LocaleUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styles from './DayPicker.module.css';
import useOnClickOutside from 'hooks/useOnClickOutside';

export default function CalendarPicker({ startDate, closeHandler }) {
  const ref = useRef();
  const [selectedDay, setSelectedDay] = useState();
  const [close, setClose] = useState(false);
  useOnClickOutside(ref, () => closeHandler(selectedDay));
  useEffect(() => {
    setSelectedDay(formatDate(startDate));
    if (close) {
      closeHandler(selectedDay);
    }
  }, [close, startDate]);

  const formatDate = date => {
    const splittedDate = date.split('.');
    return new Date(
      Number(splittedDate[2]),
      Number(splittedDate[1] - 1),
      Number(splittedDate[0]),
    );
  };

  const handleDayClick = day => {
    setSelectedDay(day);
    setClose(true);
  };

  const modifiers = {
    today: new Date(),
    selectedDay: selectedDay,
  };
  const modifiersStyles = {
    today: {
      color: '#ff751d',
      backgroundColor: 'white',
    },
    selectedDay: {
      color: 'white',
      backgroundColor: '#ff751d',
    },
  };

  return (
    <div className={styles.pickerWrapper} ref={ref}>
      <DayPicker
        selectedDays={[selectedDay, modifiers.today]}
        onDayClick={handleDayClick}
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        firstDayOfWeek={1}
        locale="ru"
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        showOutsideDays
      />
    </div>
  );
}

const MONTHS = [
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
const WEEKDAYS_LONG = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
