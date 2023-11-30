// DropDownMenus.js
import React, { useState } from 'react';
import FilterableDropdowns from './clearfilters';

const DropDownMenus = () => {
  const [showTextInput, setShowTextInput] = useState(false);

  const handleButtonClick = () => {
    setShowTextInput(true);
  };

  const handleCloseButtonClick = () => {
    setShowTextInput(false);
  };

  const [isOn, setOn] = useState(false);

  const handleToggle = () => {
    setOn((prev) => !prev);
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
        onClick={handleButtonClick}
      >
        Show Text Input
      </button>

      {showTextInput && (
        <div className="flex items-center  ">
          <input
            type="text"
            placeholder="Type something..."
            className="border p-2 rounded"
          />
          <button
            className="ml-2 bg-red-500 text-white py-2 px-4 rounded-full"
            onClick={handleCloseButtonClick}
          >
            X
          </button>
        </div>
      )}

      {!showTextInput && (
        <FilterableDropdowns />
      )}

      <h3>Show map</h3>
      <button
        className={`relative py-4 px-9 rounded-full ${
          isOn ? 'bg-green-500' : 'bg-gray-500'
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute w-7 h-7 rounded-full bg-white transition-transform transform ${
            isOn ? 'translate-x-full right-8' : 'translate-x-0 left-1'
          } top-1/2 transform -translate-y-1/2`}
        />
      </button>
    </div>
  );
};

export default DropDownMenus;
