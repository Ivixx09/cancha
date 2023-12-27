import React, { useEffect } from 'react';
import 'odometer/themes/odometer-theme-default.css';

const OdometerRow = ({ titles, maxValues }) => {
  useEffect(() => {
    const loadOdometer = async () => {
      const { default: Odometer } = await import('odometer');

      const odometerElements = document.querySelectorAll('.odometer-element');

      odometerElements.forEach((element, index) => {
        const max = maxValues[index];

        const od = new Odometer({
          el: element,
          value: 0, // Initial value
          format: '(,ddd)',
          max, // Set the maximum value
        });

        // Set the text below each Odometer number
        const textElement = document.createElement('p');
        textElement.textContent = titles[index];
        element.appendChild(textElement);

        // Delay the start of the Odometer animation by 2 seconds
        setTimeout(() => {
          // Start the Odometer animation after the delay
          od.update(max);
        }, 2000);

        // Cleanup when component unmounts
        return () => {
          od.destroy();
        };
      });
    };

    loadOdometer();
  }, [titles, maxValues]);

  return (
    <div className="flex bg-gradient-to-t from-green-800 to-green-500 justify-around">
  {[...Array(4)].map((_, index) => (
    <div key={index} className="odometer-element text-white p-4 rounded-lg text-3xl">
      {/* Content of the Odometer element */}
    </div>
  ))}
</div>


  );
};

export default OdometerRow;
