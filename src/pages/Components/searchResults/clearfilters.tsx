// FilterableDropdowns.js
import React, { useState } from 'react';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';
import Dropdown4 from './dropdown4';
const FilterableDropdowns = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [resetDropdown1, setResetDropdown1] = useState(0);
  
    const clearAllFilters = () => {
      setSelectedFilters([]);
      setResetDropdown1((prev) => prev + 1);
    };
  
    return (
      <div>
        <Dropdown1
          key={resetDropdown1} // Add key prop here
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
  
        {selectedFilters.length > 0 && (
          <div className="mt-2">
            <button onClick={clearAllFilters} className="text-red-500 hover:underline focus:outline-none">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default FilterableDropdowns;