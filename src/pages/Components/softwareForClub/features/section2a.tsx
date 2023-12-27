import React from 'react';

const Section2A = () => {
  return (
    <div className="flex items-center">
      {/* Left Column - Text Content */}
    
      
      <div className="flex-grow p-8">
        <h2 className="text-3xl  mb-4">GUARANTEE FOR RESERVATIONS</h2>
        <p className="text-4xl pb-4 font-black">Integration with Mercado Pago </p>
       
        <p className="text-xl pb-4">
        No more wasted money due to last minute cancellations! Our integration with Mercadopago allows all reservations to be guaranteed. With the “card in guarantee” method you can allow your clients to pay in cash and avoid the risk of losing their deposit if they do not attend.</p>
        <p className="text-xl pb-4">Through the “Guarantee Card” method, charges will not be executed, unless the client fails to comply with the reservation, in this way paying extra charges for processing charges will be avoided.</p>
        
      </div>
  {/* Right Column - Stock Image */}
<div className="flex-shrink-0 w-1/2">
        <img src="/images/compu.png" alt="Stock Image" className="w-full h-auto" />
      </div>
      
    </div>
  );
};

export default Section2A;
