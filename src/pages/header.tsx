import React from 'react';
function Header(){
    return(
<header className="bg-blue-500 text-white p-5 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            className="mr-2 h-8 w-8"
            src="/path_to_your_logo.png" 
            alt="Your logo"
          />
          <h1 className="text-2xl">Cancha</h1>
        </div>
        <div>
          <button className="mr-5 bg-white text-blue-500 py-2 px-4 rounded">
            Download Our Software
          </button>
          <button className="bg-white text-blue-500 py-2 px-4 rounded">
            Login
          </button>
        </div>
      </header>
      )
      }

      export default Header