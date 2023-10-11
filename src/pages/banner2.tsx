import React from 'react';
//import logo1 from '../../public/images/logo1.svg.webp'
function Banner2() {
  const sponsors = [
    { id: 1, logo: '/images/logo1.svg.webp', name: 'Sponsor 1' },
    { id: 2, logo: '/images/logo2.jpg', name: 'Sponsor 2' },
    { id: 3, logo: '/images/logo3.png', name: 'Sponsor 3' },
    // add as many sponsors as you want
  ];

  return (
    <div className="bg-blue-500 text-white text-center py-5">
      <h2 className="text-4xl my-2">Our Sponsors:</h2>
      <div className="flex justify-center flex-wrap items-center">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="m-4">
            <img className="h-16 w-auto" src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner2;
