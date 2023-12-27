import React from 'react';

const Section2D = () => {
  return (
    <div className="flex items-center">
      {/* Left Column - Text Content */}
      <div className="flex-shrink-0 w-1/2">
        <img src="/images/compu.png" alt="Stock Image" className="w-full h-auto" />
      </div>
      {/* Right Column - Stock Image */}
      
      <div className="flex-grow p-8">
        <h2 className="text-3xl  mb-4">DATA TO BOOST YOUR SPORTS COMPLEX</h2>
        <p className="text-4xl pb-4 font-black">Statistics</p>
       
        <p className="text-xl pb-4">
        With statistical reports we provide all the information about what happens in the complex in real time to make efficient decisions.</p>
        
      </div>

      
    </div>
  );
};

export default Section2D;
