// DropDownMenus.js
import React, { useState } from 'react';
import FacebookDropdown from './FacebookDropdown';

const DropDownMenus = () => {
  const [showTextInput, setShowTextInput] = useState(false);

  const handleButtonClick = () => {
    setShowTextInput(true);
  };

  const handleCloseButtonClick = () => {
    setShowTextInput(false);
  };

  const handleFarRightButtonClick = () => {
    // Handle the click logic for the far-right button
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
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type something..."
            className="border p-2 rounded"
          />
          <button
            className="ml-2 bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleCloseButtonClick}
          >
            Close
          </button>
        </div>
      )}

      {!showTextInput && (
        <FacebookDropdown />
      )}

      <button
        className="bg-green-500 text-white py-2 px-4 rounded"
        onClick={handleFarRightButtonClick}
      >
        Far Right Button
      </button>
    </div>
  );
};

export default DropDownMenus;
