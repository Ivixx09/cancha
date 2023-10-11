import { useEffect, useState } from "react";

function Banner1() {
  const [flip, setFlip] = useState(false);
  
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setFlip((flip) => !flip);
    }, 3000);

    return () => {
      clearInterval(flipInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-64 bg-black text-white flex items-center justify-center overflow-hidden">
      <div
        style={{
          transform: `rotateX(${flip ? "180deg" : "0deg"})`,
          transformStyle: "preserve-3d",
          transition: "transform 1s",
        }}
        className="w-10/12 h-32 relative text-center"
      >
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full bg-black  flex items-center justify-center"
        >
          <h2>Experience the Excellence of Our Software</h2>
        </div>
        <div
          style={{ backfaceVisibility: "hidden", transform: 'rotateX(180deg)' }}
          className="absolute w-full h-full bg-black flex items-center justify-center"
        >
          <h2>Enhancing Productivity with Invisible Efficiency</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
