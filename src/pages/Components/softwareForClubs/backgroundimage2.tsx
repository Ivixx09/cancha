import React, { useState, useEffect } from 'react';
import Header2 from './header2';
const images = ['footia.png', 'tenisia.png', 'basquetballia.png'];
const imageInterval = 5000; // 5 seconds

const BackgroundImage2: React.FC = () => {
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
    <div className="bg-cover bg-bottom pb-28 " style={backgroundImageStyle}>
      <Header2/>
      <div className="py-[6%] pl-10 ">
        <h3 className="text-5xl font-extrabold ">Management<br/> system of clubs</h3>
        <p className="py-10 text-5xl font-medium text-green-500 underline  ">Automate<br/> reservation taking </p>
        <p className=" text-2xl font-medium pb-10">Digitize your club from<br/><span className='text-3xl font-bold'>$8,710 per month</span> </p>
        <button className="  text-xl font-semibold m-2 border border-black bg-transparent py-2 px-8 rounded transition duration-300 ease-in-out  hover:scale-125">
  See plans
</button>

      </div>
      
    </div>
  );
};

export default BackgroundImage2;
