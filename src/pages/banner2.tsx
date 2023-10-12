import React, { useEffect, useState } from 'react';

function Banner2() {
  const sponsors = [
    { id: 1, logo: '/images/logo1.svg.webp', name: 'Sponsor 1' },
    { id: 2, logo: '/images/logo2.jpg', name: 'Sponsor 2' },
    { id: 3, logo: '/images/logo3.png', name: 'Sponsor 3' }, // add more sponsors as you like
  ];

  const [displayedSponsors, setDisplayedSponsors] = useState(sponsors.slice(0, 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedSponsors((oldArray) => [
        { ...oldArray[1] },  // the second sponsor becomes the first
        // select the next sponsor in the line or the first one if we are at the array's end
        { ...sponsors[(sponsors.indexOf(oldArray[1]) + 1) % sponsors.length] },
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, [sponsors]);

  return (
    <div className="bg-blue-500 text-white text-center py-5 overflow-hidden">
      <h2 className="text-4xl mb-4">Our Sponsors:</h2>
      <div className="flex justify-between items-center p-10 overflow-hidden">
        {displayedSponsors.map((sponsor, index) => (
          <div className="flex-grow transition-all duration-500 ease-in-out" key={sponsor.id}>
            <img
              className="mx-auto"
              src={sponsor.logo}
              alt={sponsor.name}
              style={{ maxWidth: '100px', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner2;
