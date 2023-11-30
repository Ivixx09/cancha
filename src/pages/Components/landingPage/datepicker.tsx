import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { subDays} from 'date-fns'
 function DateInput() {
  const [startDate, setStartDate] = useState(new Date());
  // Reference to the DatePicker
  const datePickerRef = useRef(null);

  // function to handle logo click
  const handleLogoClick = () => {
      // Trigger a click on the DatePicker input field
      if (datePickerRef && datePickerRef.current) {
        datePickerRef.current.input.click();
      }
  }

  return (
    <div className="flex items-center      border-b ">
      {/* Add a click handler to the logo */}
      <img 
        src="\images\calendarsdsad.png" 
        alt="Logo" 
        className="h-5 w-5 cursor-pointer "
        onClick={handleLogoClick}
      />
      <div className="ml-2  ">
        <DatePicker 
          ref={datePickerRef}
          selected={startDate} 
          onChange={(date) => setStartDate(date)}
          minDate={subDays(new Date(), 0)}
          className="py-3 cursor-pointer  "
          
        />
      </div>
    </div>
  );
}


export default DateInput