import React from 'react';

const Section = () => {
  return (
    <div className="flex items-center mt-32  bg-gradient-to-t from-green-800 to-green-400 ">
      {/* Left Column - Stock Image */}
      <div className="flex-grow p-8 text-white">
        <h2 className="text-3xl  mb-4">How does Sport Scourts sports software work?</h2>
        <p className="text-4xl pb-4 font-black">Automate your<br/> complex 100% online</p>
       
        <p className="text-xl pb-4">
        Receive reservations through our platform.        </p>
       
      </div>
      
      <div className="flex-shrink-0 w-1/2">
      <img src="/images/celu.png" alt="Stock Image" className="mx-auto max-h-[50vh]" />

      </div>

      {/* Right Column - Text Content */}
      
    </div>
  );
};

export default Section;