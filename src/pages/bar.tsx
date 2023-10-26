import React, { useRef,useState,useEffect } from "react";
import DateInput from "./datepicker";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function Bar() {
  const [selectedSport, setSelectedSport] = useState("Select Sport");
  const [isSportDropdownOpen, setIsSportDropdownOpen] = useState(false);

  const handleSportChange = (selectedSport) => {
    setSelectedSport(selectedSport);
    setIsSportDropdownOpen(false);
  };

  const toggleSportDropdown = () => {
    setIsSportDropdownOpen(!isSportDropdownOpen);
  };
  const dropdownRef = useRef(null);
  const handleDocumentClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsSportDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const timeDropdownRef = useRef(null);

  const handleDocumentClickTime = (e) => {
    if (timeDropdownRef.current && !timeDropdownRef.current.contains(e.target)) {
      setIsTimeDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClickTime);

    return () => {
      document.removeEventListener("click", handleDocumentClickTime);
    };
  }, []);

  const focusInput = (ref) => {
    ref.current && ref.current.focus();
  };

  // Define an array of sport options with logos
  const sportOptions = [
    { value: 'Football', logo: '/images/football.png' },
    { value: 'Basquet', logo: '/images/basketball.png' },
    { value: 'Voley', logo: '/images/voley.png' },
    { value: 'Rugby', logo: '/images/rugby.png' },
    { value: 'Tennis', logo: '/images/tennis.png' },
    { value: 'Swimming', logo: '/images/swimming.png' },
    { value: 'Marathon', logo: '/images/marathon.png' },
    

    // Add more sport options with logos
  ];
  const [selectedHour, setSelectedHour] = useState("Select Hour");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  const hours = [
    "8:00 hs ",
    "8:30 hs",
    "9:00 hs",
    "9:30 hs",
    "10:00 hs",
    "10:30 hs",
    "11:00 hs",
    "11:30 hs",
    "12:00 hs",
    "12:30 hs",
    "13:00 hs",
    "13:30 hs",
    "14:00 hs",
    "14:30 hs",
    "15:00 hs",
    "15:30 hs",
    "16:00 hs",
    "16:30 hs",
    "17:00 hs",
    "17:30 hs",
    "18:00 hs",
    "18:30 hs",
    "19:00 hs",
    "19:30 hs",
    "20:00 hs",
    "20:30 hs",
    "21:00 hs",
    "21:30 hs",
    "22:00 hs",
    "22:30 hs",
    "23:00 hs",
    "23:30 hs",
    "0:00  hs",
    "0:30 hs",
    "1:00 hs",
    "1:30 hs",
    "2:00 hs"
  ];

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
    setIsTimeDropdownOpen(false);
  };

  const toggleTimeDropdown = () => {
    setIsTimeDropdownOpen(!isTimeDropdownOpen);
  };
  

    return (
      <section className="flex justify-center items-center">
      <div className="mb-8 ml-5 mr-5 bg-white rounded-xl w-full sm:w-auto">
        <div className="md:flex">
          <div className="md:flex-grow p-3">
            <div className="flex flex-col md:flex-row flex-wrap -mx-3">
              <div className="px-3 ">
                <div className="mt-2 relative block w-full  border-b border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <div className="flex items-center">
                    <img src="/images/location.png" alt="logo" className="w-6 h-6" />
                    <div className="flex-grow">
                      <GooglePlacesAutocomplete
                        apiKey="YOUR_API_KEY"
                        selectProps={{
                          placeholder: 'Search City',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 " ref={dropdownRef}>
                <div className="relative block appearance-none w-full bg-white border-b border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <div className="relative">
                    <div
                      onClick={toggleSportDropdown}
                      className="block appearance-none w-full bg-white border-none text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
                    >
                      <div className="flex items-center">
                        {selectedSport === "Select Sport" ? (
                          <img src="/images/sports.png" alt="logo" className="w-6 h-6 mr-2" />
                        ) : (
                          <img
                            src={`/images/${selectedSport.toLowerCase()}.png`}
                            alt="logo"
                            className="w-6 h-6 mr-2"
                          />
                        )}
                        {selectedSport}
                      </div>
                    </div>
                    {isSportDropdownOpen && (
                      <div className="absolute z-10 w-40 bg-white border border-gray-300 text-gray-700 mt-2 py-1 rounded shadow-lg left-0 max-h-40 overflow-y-auto">
                        {sportOptions.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => handleSportChange(option.value)}
                            className="px-4 py-2 hover-bg-gray-200 cursor-pointer flex items-center"
                          >
                            <img
                              src={`/images/${option.value.toLowerCase()}.png`}
                              alt={option.value}
                              className="w-6 h-6 mr-2"
                            />
                            {option.value}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-3 ">
                <DateInput />
              </div>
              <div className="px-3 " ref={timeDropdownRef}>
                <div className="relative inline-block bg-white text-gray-700 focus:outline-none focus:bg-white border-b-2 border-gray-200">
                  <div
                    onClick={toggleTimeDropdown}
                    className="block appearance-none w-full bg-white border-none text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer flex items-center"
                  >
                    <div className="flex items-center">
                      <img
                        src="/images/timeclock.png"
                        alt="Logo"
                        className="w-6 h-6 mr-2 cursor-pointer"
                        onClick={toggleTimeDropdown}
                      />
                    </div>
                    {selectedHour}
                  </div>
                  {isTimeDropdownOpen && (
                    <div className="absolute z-10 w-40 bg-white border border-gray-300 text-gray-700 mt-2 py-1 rounded shadow-lg left-0 max-h-40 overflow-y-auto">
                      {hours.map((hour) => (
                        <div
                          key={hour}
                          onClick={() => handleHourChange(hour)}
                          className="px-4 py-2 hover-bg-gray-200 cursor-pointer"
                        >
                        {hour}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="px-3 ">
                <div className="flex items-center">
                  <button className="w-full  mt-0.5 bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded-full" type="button">
                    Search Courts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bar