import React from 'react';

const Section2C = () => {
  return (
    <div className="flex items-center">
      {/* Left Column - Text Content */}
      
      
      
      <div className="flex-grow p-8">
        <h2 className="text-3xl  mb-4">EFFICIENT ADMINISTRATION</h2>
        <p className="text-4xl pb-4 font-black">Box and Stock</p>
       
        <p className="text-xl pb-4">
        It allows you to maintain detailed daily cash control with all the movements of the complex, closely manage inventory and stock information.        </p>
        
      </div>
{/* Right Column - Stock Image */}
      <div className="flex-shrink-0 w-1/2">
        <img src="/images/compu.png" alt="Stock Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Section2C;
