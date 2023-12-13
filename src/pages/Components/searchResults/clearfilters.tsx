// FilterableDropdowns.js

import React, { useState } from 'react';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';
import Dropdown4 from './dropdown4';

const FilterableDropdowns = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleClearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="flex">
      <div className="flex-grow">
        <Dropdown1
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <Dropdown2
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <Dropdown3
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <Dropdown4
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      {selectedFilters.length > 0 && (
        <div className="ml-auto">
          <button
            onClick={handleClearFilters}
            className="bg-red-500 text-white py-2 px-4 rounded-full"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterableDropdowns;