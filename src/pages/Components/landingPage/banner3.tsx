import { useEffect, useState } from "react";

function Banner3() {
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
    <div className="bg-green-600 relative w-full h-58 bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="w-10/12 h-32 relative text-center">
        <div
          className={`bg-green-600 absolute w-full h-full bg-black flex items-center justify-center transition-opacity ${
            showText === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl ">Select the best court available everywhere you are! </h2>
        </div>
        <div
          className={`bg-green-600 absolute w-full h-full bg-black flex items-center justify-center transition-opacity ${
            showText === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-2xl ">Number 1 web to enjoy sports along the world!</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
