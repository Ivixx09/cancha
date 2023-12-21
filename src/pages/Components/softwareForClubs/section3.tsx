import React from 'react';

const Section3 = () => {
  return (
    <div className="text-center my-8">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6">Digitize your complex</h2>

      {/* Image Cards */}
      <div className="flex justify-around">
        {/* Image Card 1 */}
        <div className="max-w-xs">
        <img src="/images/multiplatform.png" alt="Image 1" className="mx-auto w-1/2 border-8 border-black rounded-lg p-2" />

          <p className="text-lg">Fast and easy</p>
        </div>

        {/* Image Card 2 */}
        <div className="max-w-xs">
          <img src="/images/pc.png" alt="Image 2" className="mx-auto w-1/2 border-8 border-black rounded-lg p-2"  />
          <p className="text-lg">Multi platform</p>
        </div>

        {/* Image Card 3 */}
        <div className="max-w-xs">
          <img src="/images/web.png" alt="Image 3" className="mx-auto w-1/2 border-8 border-black rounded-lg p-2"  />
          <p className="text-lg">100% Online</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
