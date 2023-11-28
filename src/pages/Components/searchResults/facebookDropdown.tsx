// FacebookDropdown.js
import React, { useState } from 'react';

const FacebookDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleItemClick = (item) => {
    // Handle item click logic
    console.log(`Clicked on ${item}`);
    setDropdownOpen(false); // Close the dropdown after an item is clicked
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={handleToggleDropdown}
        type="button"
        className="flex items-center justify-between w-36 px-4 py-2 text-sm font-semibold text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        {/* Add your logo here */}
        <img
          src="/path/to/your/logo.png"
          alt="Logo"
          className="w-6 h-6 mr-2 rounded-full"
        />
        Account
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div
              onClick={() => handleItemClick('Profile')}
              className="block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {/* Add profile icon/logo here */}
              <img
                src="/path/to/your/profile-icon.png"
                alt="Profile"
                className="w-4 h-4 mr-2"
              />
              Profile
            </div>
            <div
              onClick={() => handleItemClick('Settings')}
              className="block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {/* Add settings icon/logo here */}
              <img
                src="/path/to/your/settings-icon.png"
                alt="Settings"
                className="w-4 h-4 mr-2"
              />
              Settings
            </div>
            <div
              onClick={() => handleItemClick('Logout')}
              className="block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {/* Add logout icon/logo here */}
              <img
                src="/path/to/your/logout-icon.png"
                alt="Logout"
                className="w-4 h-4 mr-2"
              />
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacebookDropdown;
