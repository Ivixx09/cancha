import React from 'react';

const Section2 = () => {
  return (
    <div className="flex items-center">
      {/* Left Column - Text Content */}
      <div className="flex-grow p-8">
        <h2 className="text-3xl  mb-4">TRY IT FOR FREE</h2>
        <p className="text-4xl pb-4 font-black">Manage your complex
<br/><span className='text-green-500'>100% online</span> </p>
       
        <p className="text-xl pb-4">
        No more paper and pencil to manage your complex! With ATC you will unify all its management from your cell phone, anywhere and simultaneously with other administrators.        </p>
        <button className="text-xl rounded-lg text-white font-semibold m-2 bg-green-500  py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-green-400 hover:scale-110">
        See plans and prices
</button>
<button className="text-xl font-semibold  m-2 border border-green-500 text-green-500 py-2 px-4 rounded transition duration-300 ease-in-out  hover:text-green-400 hover:scale-110">
Talk to sales
  </button>
      </div>

      {/* Right Column - Stock Image */}
      <div className="flex-shrink-0 w-1/2">
        <img src="/images/compu.png" alt="Stock Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Section2;
