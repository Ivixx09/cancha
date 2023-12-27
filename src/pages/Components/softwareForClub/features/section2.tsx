import React from 'react';

const Section2 = () => {
  return (
    <div className="flex items-center">
      {/* Left Column - Text Content */}
      <div className="flex-shrink-0 w-1/2">
        <img src="/images/compu.png" alt="Stock Image" className="w-full h-auto" />
      </div>
      {/* Right Column - Stock Image */}
      
      <div className="flex-grow p-8">
        <h2 className="text-3xl  mb-4">A WEBSITE FOR YOUR COMPLEX</h2>
        <p className="text-4xl pb-4 font-black">Online Reservations</p>
       
        <p className="text-xl pb-4">
        Each resort has its own website where you can receive online reservations in less than a minute, 24/7. In this way, the club is always available to customers, avoiding losing reservations due to lack of response or telephone service.
    </p>
    <p className='text-xl pb-4'>In addition, we automate responses through WhatsApp, social networks, Google and everything is resolved automatically.  </p>
        
      </div>

      
    </div>
  );
};

export default Section2;
