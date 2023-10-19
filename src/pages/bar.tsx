import React, { useRef,useState } from "react";
import DateInput from "./datepicker";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function Bar() {
    const [sport, setSport] = useState('');
const [value,setValue]=useState(null);
  const handleSportChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSport(event.target.value);
  };
  
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const focusInput = (ref: React.MutableRefObject<null>) => {
    ref.current && ref.current.focus();
}
    return (
        <section className="flex justify-center items-center">
            <div className="mb-10 ml-5 mr-5 bg-white rounded-xl shadow-md overflow-hidden md:inline-flex w-auto">
        <div className="md:flex">
          <div className="md:flex-grow p-8">
            <div className="flex flex-row flex-wrap -mx-3">
                            <div className="px-3">
                            <div className="relative block appearance-none w-full bg-white border-b border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <div className="flex items-center">
                                        <img src="logo1.png" alt="logo" className="mr-2" /> {/* Logo Image */}
                                        <div className="flex-grow"> {/* Autocomplete Input Field */}
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
                            <div className="px-3">
                                <div className="relative block appearance-none w-full bg-white border-b border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
            <img src="logo2.png" alt="logo" className="absolute left-2" onClick={() => focusInput(inputRef2)} />
        </div>
                                <select  ref={inputRef2} value={sport || ''} // If sport is an empty string, the initial label 'Select Sport' will be shown
  onChange={handleSportChange}
  className="block appearance-none w-full bg-white border-none text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  id="grid-sport"
>
  <option value='' hidden>Select Sport</option> {/* Initial label */}
  <option value='Soccer'>Soccer</option>
  <option value='Tennis'>Tennis</option>
  <option value='Baseball'>Baseball</option>
</select>
                                    
                                </div>
                            </div>
                            <div className="px-3">
                                <DateInput/>
    
</div>
                            <div className="px-3">
                                <div className="relative block appearance-none w-full bg-white border-b border-gray-300 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
            <img src="logo3.png" alt="logo" className="absolute left-2" onClick={() => focusInput(inputRef3)} />
        </div>
                                <select ref={inputRef3} className="block appearance-none w-full bg-white border-none text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>8:00 </option>
                                        <option>8:30 </option>
                                        <option>9:00 </option>
                                        <option>9:30 </option>
                                        <option>10:00 </option>
                                        <option>10:30 </option>
                                        <option>11:00 </option>
                                        <option>11:30 </option>
                                        <option>12:00 </option>
                                        <option>12:30 </option>
                                        <option>13:00 </option>
                                        <option>13:30 </option>
                                        <option>14:00 </option>
                                        <option>14:30 </option>
                                        <option>15:00 </option>
                                        <option>15:30 </option>
                                        <option>16:00 </option>
                                        <option>16:30 </option>
                                        <option>17:00 </option>
                                        <option>17:30 </option>
                                        <option>18:00 </option>
                                        <option>18:30 </option>
                                        <option>19:00 </option>
                                        <option>19:30 </option>
                                        <option>20:00 </option>
                                        <option>20:30 </option>
                                        <option>21:00 </option>
                                        <option>21:30 </option>
                                        <option>22:00 </option>
                                        <option>22:30 </option>
                                        <option>23:00 </option>
                                        <option>23:30 </option>
                                        <option>0:00 </option>
                                        <option>0:30 </option>
                                        <option>1:00 </option>
                                        <option>1:30 </option>
                                        <option>2:00 </option>
                                    </select>
                                   
                                </div>
                            </div>
                            <div className="flex items-center px-3 py-0">
                            <button className="bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full" type="button">
                                Search Courts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bar