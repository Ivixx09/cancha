// SearchResultsPage.tsx
import React from 'react';
import Bar2 from './bar2';
import CourtList from './courtList';
import Map from './Map';
import DropDownMenus from './dropdownMenus';
function SearchResultsPage() {
  
  return (
    <div>
        <Bar2  /> 
      <div className="">
        <div className="">
          
         <DropDownMenus/>
          {/* Dropdown menus component */}
          {/* You can create a new component for the dropdown menus */}
        </div>
        <div className="">
          <CourtList />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;