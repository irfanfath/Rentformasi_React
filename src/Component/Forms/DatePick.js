import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick= () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
      <>
        <DatePicker className="input subscribe-input w-input"
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        &nbsp;&nbsp;
        <DatePicker className="input subscribe-input w-input"
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          endDate={endDate}
          minDate={startDate}
        />
      </>
    );
  };

  export default DatePick;

