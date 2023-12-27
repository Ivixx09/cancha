import React, { useState } from 'react';

const Section2: React.FC = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  return (
    <div className="text-center mt-16">
      {/* Button */}
      <button
        className={`transition-transform duration-500 ease-in-out transform ${
          isButtonVisible ? 'translate-x-0' : 'translate-x-full'
        } bg-green-500 text-white py-2 px-4 rounded-lg mb-4`}
        onClick={handleButtonClick}
      >
        Toggle Button
      </button>

      {/* Columns with Text */}
      <div className="flex justify-around">
        {/* Column 1 */}
        <div
          className={`flex flex-col items-center transition-transform duration-500 ease-in-out transform ${
            isButtonVisible ? 'rotate-0 bg-gray-100' : 'rotate-360 bg-gray-300'
          } p-6 rounded-lg`}
        >
          {isButtonVisible ? (
            <>
              <p className="text-xl text-green-500 font-bold">Base Plan</p>
              <p className='text-green-500'>1 - 2 - 3 Courts</p>
              <p>$13,000/month</p>
            </>
          ) : (
            <>
              <p className="text-xl text-green-500 font-bold">Base Plan</p>
              <p className='text-green-500'>1 - 2 - 3 Courts</p>
              <p className='line-through'>$13,000</p>
              <p>$8,710 /month</p>
              <p>$104,520 for 12 months</p>
            </>
          )}
        </div>

        {/* Column 2 */}
        <div
          className={`flex flex-col items-center transition-transform duration-500 ease-in-out transform ${
            isButtonVisible ? 'rotate-0 bg-gray-100' : 'rotate-360 bg-gray-300'
          } p-6 rounded-lg`}
        >
          {isButtonVisible ? (
            <>
              <p className="text-xl text-green-500 font-bold">Standard Plan</p>
              <p className='text-green-500'>4 - 5 - 6 Courts</p>
              <p>$24,000/month</p>
            </>
          ) : (
            <>
              <p className="text-xl text-green-500 font-bold">Standard Plan</p>
              <p className='text-green-500'>4 - 5 - 6 Courts</p>
              <p className='line-through'>24,000</p>
              <p>$16,080 /month</p>
              <p>$192,960 for 12 months</p>
            </>
          )}
        </div>

        {/* Column 3 */}
        <div
          className={`flex flex-col items-center transition-transform duration-500 ease-in-out transform ${
            isButtonVisible ? 'rotate-0 bg-gray-100' : 'rotate-360 bg-gray-300'
          } p-6 rounded-lg`}
        >
          {isButtonVisible ? (
            <>
              <p className="text-xl text-green-500 font-bold">Full Plan</p>
              <p className='text-green-500'>7 or more Courts</p>
              <p>$33,000/month</p>
            </>
          ) : (
            <>
              <p className="text-xl text-green-500 font-bold">Full Plan</p>
              <p className='text-green-500'>7 or more Courts</p>
              <p className='line-through'>$33,000</p>
              <p>$22,110 /month</p>
              <p>$265,320 for 12 months</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section2;
