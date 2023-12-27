import React from 'react';
import Footer from '../../landingPage/footer';

const Section4 = () => {
  return (
    <div className="text-center   flex-col items-center bg-gradient-to-b from-gray-800 to-gray-500">
      {/* Image */}
      <img src="/images/calendar.png" alt="Center Image" className="mx-auto h-[10vh] " />

      {/* Text Below Image */}
      <div className='flex flex-col items-center'>
        <p className="text-3xl text-white font-bold">Automate your reservations!</p>
        <p className="text-2xl text-white">Try it <span className='text-3xl font-bold'>FREE for 1 MONTH</span> and jump into the digital age</p>
        <button className="font-semibold m-2 bg-green-500 text-white py-2 px-8 rounded transition duration-300 ease-in-out hover:bg-green-400 hover:text-gray-100 hover:scale-110">
        Try for free
  </button>
        
<button className=" text-xl text-white font-semibold m-2 border border-white bg-transparent py-2 px-8 rounded transition duration-300 ease-in-out  hover:scale-110">
  See plans
</button>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Section4;
