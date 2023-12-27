import React from 'react';

const Section2A = () => {
  return (
    <div className="text-center mt-16">
      {/* Middle Text */}
      <p className="text-3xl font-semibold mb-8">Your Middle Text Here</p>

      {/* Three Columns with Lists and Checkmarks */}
      <div className="flex justify-around mb-8">
        {/* Column 1 */}
        <div className="flex flex-col items-center">
          <ul className=" text-lg">
            <li>
              <span className="mr-2">&#10003;</span> Item 1
            </li>
            <li>
              <span className="mr-2">&#10003;</span> Item 2
            </li>
            <li>
              <span className="mr-2">&#10003;</span> Item 3
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center">
          <ul className=" text-lg">
            <li>
              <span className="mr-2">&#10003;</span> Item A
            </li>
            <li>
              <span className="mr-2">&#10003;</span> Item B
            </li>
            <li>
              <span className="mr-2">&#10003;</span> Item C
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center">
          <ul className=" text-lg">
            <li>
              <span className="mr-2">&#10003;</span> Option X
            </li>
            <li>
              <span className="mr-2">&#10003;</span> Option Y
            </li>
            <li>
              <span className="mr-2">&#10003;</span> Option Z
            </li>
          </ul>
        </div>
      </div>

      {/* Title Below All */}
      <p className="text-4xl font-bold">Your Title Below All</p>
    </div>
  );
};

export default Section2A;
