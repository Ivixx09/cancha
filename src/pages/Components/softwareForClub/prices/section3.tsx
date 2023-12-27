import React from 'react';

const Section3 = () => {
  return (
    <div className="text-center my-8">
      {/* Title */}
      <h2 className="text-4xl pb-4 font-black mb-6">Soon</h2>

      {/* Image Cards */}
      <div className="flex justify-around">
        {/* Image Card 1 */}
        <div className="max-w-xs">
        <img src="/images/pair.png" alt="Image 1" className="mx-auto w-1/2 border-8 border-black rounded-lg p-2" />

          <p className="text-lg font-bold">Setting up matches and “Foul 1”</p>
        </div>

        {/* Image Card 2 */}
        <div className="max-w-xs">
          <img src="/images/trophy.png" alt="Image 2" className="mx-auto w-1/2 border-8 border-black rounded-lg p-2"  />
          <p className="text-lg font-bold">Tournament registration management</p>
        </div>

        {/* Image Card 3 */}
        <div className="max-w-xs">
          <img src="/images/coach.png" alt="Image 3" className="mx-auto w-1/2 border-8 border-black rounded-lg p-2"  />
          <p className="text-lg font-bold">Class and activity management</p>
        </div>
        <div className="max-w-xs">
          <img src="/images/speech-bubble.png" alt="Image 3" className="mx-auto w-1/2 border-8 border-black rounded-lg p-2"  />
          <p className="text-lg font-bold">Integration with WhatsApp API</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
