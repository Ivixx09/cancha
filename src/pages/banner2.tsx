import React, { useEffect, useState } from 'react';

function Banner2() {
  const sponsors = [
    { id: 1, logo: '/images/logo1.svg.webp', name: 'Sponsor 1' },
    { id: 2, logo: '/images/logo2.jpg', name: 'Sponsor 2' },
    { id: 3, logo: '/images/logo3.png', name: 'Sponsor 3' },
    // add as many sponsors as you want
  ];

  const [displayedSponsors, setDisplayedSponsors] = useState(sponsors.slice(0, 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedSponsors((oldArray) => [
        ...oldArray.slice(1, 2),
        sponsors[(sponsors.indexOf(oldArray[1]) + 1) % sponsors.length],
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-500 text-white text-center py-5 overflow-hidden">
      <h2 className="text-4xl mb-4">Our Sponsors:</h2>
      <div className="flex space-x-4 items-center justify-center">
        {displayedSponsors.map((sponsor) => (
          <div key={sponsor.id} className="w-1/2 flex justify-center">
            <img style={{ maxWidth: '100px', height: 'auto' }} src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner2;
