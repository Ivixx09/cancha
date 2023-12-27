import React from 'react';

const Section = () => {
  return (
    <div className="flex items-center">
      {/* Left Column - Stock Image */}
      <div className="flex-shrink-0 w-1/2">
      <img src="/images/celu.png" alt="Stock Image" className="mx-auto max-h-[50vh]" />

      </div>

      {/* Right Column - Text Content */}
      <div className="flex-grow p-8">
        <h2 className="text-3xl  mb-4">RESERVATION AUTOMATION</h2>
        <p className="text-4xl pb-4 font-black">Receive all your clients
<br/><span className='text-green-500'> In one single place!</span> </p>
       
        <p className="text-xl pb-4">
        No matter where they contact you from (whatsapp, instagram, facebook, google, etc.), your clients will be able to check availability in real time and book with a single click. Without the need for a person to receive the reservation.        </p>
        <button className="text-xl rounded-lg text-white font-semibold m-2 bg-green-500  py-2 px-8 rounded transition duration-300 ease-in-out hover:bg-green-400 hover:scale-125">
  See Features
</button>
      </div>
    </div>
  );
};

export default Section;