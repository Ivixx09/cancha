import React from 'react';

const Section2B = () => {
  return (
    <div className="flex items-center">
      {/* Left Column - Text Content */}
      <div className="flex-shrink-0 w-1/2">
        <img src="/images/compu.png" alt="Stock Image" className="w-full h-auto" />
      </div>
      {/* Right Column - Stock Image */}
      
      <div className="flex-grow p-8">
        <h2 className="text-3xl  mb-4">CONTROL YOUR CLUB REMOTELY</h2>
        <p className="text-4xl pb-4 font-black">Software Online </p>
       
        <p className="text-xl pb-4">
        Manage your complex from anywhere! You can manage reservations, bar consumption, view statistics, resolve overlapping reservations with this multi-user platform and everything you need, from any device.</p>
        
      </div>

      
    </div>
  );
};

export default Section2B;
