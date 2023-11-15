import React, { useState, useEffect } from 'react';
import Bar from './bar';
import Header from './header';
const images = ['footia.png', 'tenisia.png', 'basquetballia.png'];
const imageInterval = 5000; // 5 seconds

const BackgroundImage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, imageInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to right, white 15%, transparent 50%), url('/images/${images[currentImage]}')`,
    backgroundSize: 'cover', // Maintain the cover aspect ratio
  };

  return (
    <div className="bg-cover bg-bottom " style={backgroundImageStyle}>
      <Header/>
      <div className="p-[10%]">
        <h3 className="text-7xl font-bold mb-10">Ready to play?</h3>
        <p className="text-2xl ">Discover and book sports facilities <br /> availables around you in real time</p>
      </div>
      <div className=" pb-32">
        <Bar />
      </div>
    </div>
  );
};

export default BackgroundImage;
