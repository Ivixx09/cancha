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
      <div className="flex">
        <button
          className=" text-white py-2 px-4 rounded mr-4"
          onClick={handleButtonClick}
        >
          <img src="\images\search.png" className='h-5 w-5' alt="search_logo" />
        </button>

        {showTextInput && (
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter the club name..."
              className="border p-2 px-8 rounded"
            />
            <button
  className="ml-2 text-black border border-black border-2 bg-transparent py-1 px-3 rounded-full"
  onClick={handleCloseButtonClick}
>
  X
</button>

          </div>
        )}
      </div>

      {!showTextInput && (
        <FilterableDropdowns />
      )}

      <div className="flex items-center ml-auto">
      <h3 className="mr-4">Show map</h3>
        <button
          className={`relative py-4 px-9 mr-4 rounded-full ${
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
    </div>
  );
};

export default DropDownMenus;
