import s from './DateForm.module.css';

import CalendarPicker from 'components/DayPicker/DayPicker';
import –°alendarIcon from 'components/SvgIcons/–°alendarIcon';

const DateForm = ({
  date,
  handleCalendarClick,
  closePicker,
  picker,
  align,
}) => {
  return (
    <div className={s.dateForm} onClick={handleCalendarClick}>
      <div className={s.calendarOverley}>
        <–°alendarIcon />
        {picker && (
          <CalendarPicker
            closeHandler={closePicker}
            startDate={date}
            align={align}
          />
        )}
      </div>
      <p>{date}</p>
    </div>
  );
};

export default DateForm;
