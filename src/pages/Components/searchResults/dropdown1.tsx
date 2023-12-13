import React, { useState, useEffect, useRef } from 'react';

const Dropdown1 = ({ selectedFilters, setSelectedFilters }) => {
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
    setDropdownOpen(false);
    setSelectedFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      const existingIndex = newFilters.findIndex(
        (filter) => filter.identifier === 'Dropdown1'
      );
  
      if (existingIndex !== -1) {
        newFilters.splice(existingIndex, 1, { identifier: 'Dropdown1', filter: item });
      } else {
        newFilters.push({ identifier: 'Dropdown1', filter: item });
      }
  
      return newFilters;
    });
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        type="button"
        className={`flex items-center justify-between w-36 px-4 py-2 text-sm font-semibold ${
          selectedFilters.length && selectedFilters[0].filter ? '' : 'text-gray-800'
        } bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
      >
        {selectedFilters.length && selectedFilters[0].filter ? (
          // Display the selected option
          <>
            <img
              src={`/images/${selectedFilters[0].filter
                .toLowerCase()
                .replace(' ', '-')}.png`}
              alt={selectedFilters[0].filter}
              className="w-4 h-4 mr-2"
            />
            {selectedFilters[0].filter}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12l2 2 6-6" />
            </svg>
          </>
        ) : (
          // Display default text if no option is selected
          <>
            <img
              src="\images\up-down.png"
              alt="Logo"
              className="w-4 h-4 mr-2 "
            />
            Sort
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
          </>
        )}
      </button>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {/* Render all items with a mark for selected ones */}
            {['Price', 'Name', 'Rating'].map(
              (item) => (
                <div
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`block flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
                    selectedFilters.find((filter) => filter.filter === item) ? 'bg-green-100' : ''
                  }`}
                >
                  {/* Add profile icon/logo here */}
                  <img
                    src={`/images/${item}.png`}
                    alt={item}
                    className="w-4 h-4 mr-2"
                  />
                  {item}
                  {selectedFilters.find((filter) => filter.filter === item) && (
                    <svg
                      className="w-4 h-4 ml-2 "
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

export default Dropdown1;