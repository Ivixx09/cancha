// SearchResultsPage.tsx
import React from 'react';
import Bar from '../landingPage/bar';
import CourtList from './courtList';
import Map from './Map';
import DropDownMenus from './dropdownMenus';
function SearchResultsPage() {
  
  return (
    <div>
       <Bar  /> 
      <div className="flex">
        <div className="w-1/4">
          <h1>SEXOOOO</h1>
         <DropDownMenus/>
          {/* Dropdown menus component */}
          {/* You can create a new component for the dropdown menus */}
        </div>
        <div className="w-3/4">
          <CourtList />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;