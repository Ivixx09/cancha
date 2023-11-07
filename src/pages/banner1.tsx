import { useEffect, useState } from "react";

function Banner1() {
  const [showText, setShowText] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setShowText((prevText) => (prevText === 0 ? 1 : 0));
    }, 3000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-64 bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="w-10/12 h-32 relative text-center">
        <div
          className={`absolute w-full h-full bg-black flex items-center justify-center transition-opacity ${
            showText === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2>Experience the Excellence of Our Software</h2>
        </div>
        <div
          className={`absolute w-full h-full bg-black flex items-center justify-center transition-opacity ${
            showText === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2>Enhancing Productivity with Invisible Efficiency</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
