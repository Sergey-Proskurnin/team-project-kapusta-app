import s from './DateForm.module.css';

import CalendarPicker from 'components/DayPicker/DayPicker';
import СalendarIcon from 'components/SvgIcons/СalendarIcon';

const DateForm = ({ date, handleCalendarClick, closePicker, picker }) => {
  return (
    <div className={s.dateForm}>
      <div className={s.calendarOverley} onClick={handleCalendarClick}>
        <СalendarIcon />
        {picker && (
          <CalendarPicker closeHandler={closePicker} startDate={date} />
        )}
      </div>
      <p>{date}</p>
    </div>
  );
};

export default DateForm;
