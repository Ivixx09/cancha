import React from 'react';

const Section2 = () => {
  return (
    <div className="flex items-center">
      {/* Left Column - Text Content */}
      <div className="flex-grow p-8">
      <h2 className="text-3xl font-bold mb-4">RESERVATION AUTOMATION</h2>
        <p className="text-2xl text-green-500 underline  ">Receive all your clients
In one single place! </p>
        <h3>¡Recepciona todos sus clientes en un sólo lugar!</h3>
        <p className="text-lg">
        No matter where they contact you from (whatsapp, instagram, facebook, google, etc.), your clients will be able to check availability in real time and book with a single click. Without the need for a person to receive the reservation.        </p>
        <button className="font-semibold m-2 bg-green-500 text-white py-2 px-8 rounded transition duration-300 ease-in-out hover:bg-green-400 hover:text-gray-100 hover:scale-110">
        See plans and prices
  </button>
  <button className="font-semibold mt-6 m-2 border border-green-500 text-green-500 py-2 px-4 rounded transition duration-300 ease-in-out  hover:text-green-400 hover:scale-110">
  Talk to sales
  </button>
      </div>

      {/* Right Column - Stock Image */}
      <div className="flex-shrink-0 w-1/2">
        <img src="/images/argentina.png" alt="Stock Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Section2;
