// Dropdown2.js
import React, { useState, useEffect, useRef } from 'react';

const Dropdown2 = ({ selectedFilters, setSelectedFilters }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleItemClick = (item) => {
    if (selectedFilters.includes(item)) {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== item)
      );
    } else {
      setSelectedFilters((prevFilters) => [...prevFilters, item]);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        type="button"
        className={`flex items-center justify-between w-36 px-4 py-2 text-sm font-semibold ${
          selectedFilters.length ? '' : 'text-gray-800'
        } bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
      >
        {/* Add your logo here */}
        <img
          src="/images/floor.png"
          alt="Logo"
          className="w-4 h-4 mr-2 "
        />
        Surface
        <svg
          className={`w-4 h-4 ml-2 ${
            isDropdownOpen ? '-rotate-180' : 'rotate-0'
          } transition-transform`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {/* Render all items with a mark for selected ones */}
            {['Blindex', 'Sintetic blindex', 'Brick dust', 'Cement', 'Natural grass', 'Parquet', 'Sintetic', 'Water'].map(
              (item) => (
                <div
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
                    selectedFilters.includes(item) ? 'bg-green-100' : ''
                  }`}
                >
                  {/* Add profile icon/logo here */}
                 
                  {item}
                  {selectedFilters.includes(item) && (
                    <svg
                      className="w-4 h-4 ml-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12l2 2 6-6" />
                    </svg>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
