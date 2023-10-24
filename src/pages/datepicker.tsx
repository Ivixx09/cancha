import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function DateInput() {
  const [startDate, setStartDate] = useState(null);
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
    <div className="flex items-center bg-white text-gray-700 focus:outline-none focus:bg-white w-full border-b-2 border-gray-200 ">
      {/* Add a click handler to the logo */}
      <img 
        src="public\images\calendar.png" 
        alt="Logo" 
        className="h-5 w-5 cursor-pointer "
        onClick={handleLogoClick}
      />
      <div className="ml-2 w-full ">
        <DatePicker 
          ref={datePickerRef}
          selected={startDate} 
          onChange={(date) => setStartDate(date)}
          className="py-2.5  "
          placeholderText="  Select Date"
        />
      </div>
    </div>
  );
}
