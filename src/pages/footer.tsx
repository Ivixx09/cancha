import React, { useState, useEffect, useRef } from 'react'
function Footer (){
  const countries = [
    { name: 'United States', flag: '/images/united-states.png' },
    { name: 'Mexico', flag: '/images/mexico.png' },
    { name: 'Argentina', flag: '/images/argentina.png' },
    // Add more countries with flag URLs
  ];

  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCountrySelect = (countryName) => {
    setSelectedCountry(countryName);
    setIsDropdownOpen(false);
  };

  const closeDropdownOnClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdownOnClickOutside);

    return () => {
      document.removeEventListener('click', closeDropdownOnClickOutside);
    };
  }, []);

    return (
        <div>
        <div className="flex justify-center space-x-32 my-4 mb-24 bg-green-950">
          {/* Column 1 */}
          <div className="text-center">
            <img src="" alt="Logo 1" className="w-16 h-16" />
            <p>Online support</p>
            <div className="flex items-center justify-center">
    <img src="/images/whatsapp.png" alt="Logo 2" className="w-6 h-6 mr-2" />
    <img src="\images\mail.png" alt="Logo 3" className="w-6 h-6 mr-2" />
  </div>
          </div>
    
          {/* Column 2 */}
          <div className="text-center">
            <p>Discover sports courts</p>
            <p>Privacy policies</p>
            <h3 className="text-lg font-semibold">Social networks</h3>
            <div className="flex items-center justify-center">
            <img src="/images/instagram.png" alt="Logo 4" className="w-6 h-6 mr-2" />
            <img src="/images/facebook.png" alt="Logo 5" className="w-6 h-6 mr-2" />
            <img src="/images/linkedin.png" alt="Logo 6" className="w-6 h-6 mr-2" />
            </div>
          </div>
    
          {/* Column 3 */}
          <div className="text-center">
            <p>Direct contact</p>
            <p>Text 1</p>
            <p>Text 2</p>
            <p>Text 3</p>
            <p>Text 4</p>
            <p>Text 5</p>
          </div>
    
          {/* Column 4 */}
          <div className="text-center" ref={dropdownRef}>
          <h3 className="text-lg font-semibold">Sign up for our Newsletter</h3>
          <input type="email" placeholder="Email" className="border p-2 rounded-lg" />
          <button className="bg-blue-500 text-white px-2.5 py-2 rounded-lg">Send</button>
          <div className="relative block">
            <button
              className="block appearance-none w-full bg-white border-none text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer flex items-center"
              onClick={toggleDropdown}
            >
              <div className="flex items-center">
                <img
                  src={countries.find((country) => country.name === selectedCountry).flag}
                  alt="Flag"
                  className="w-6 h-6 mr-2"
                />
              </div>
              {selectedCountry}
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10  w-64 bg-white border border-gray-300 text-gray-700 mt-2 py-1 rounded shadow-lg left-0 max-h-40 overflow-y-auto">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    onClick={() => handleCountrySelect(country.name)}
                    className="px-4 py-2 hover-bg-gray-200 cursor-pointer flex items-center"
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-6 h-6 mr-2"
                    />
                    {country.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer