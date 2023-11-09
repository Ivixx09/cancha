import React from 'react';
function Header(){
    return(
      <header className="bg-blue-500 text-white p-5 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-2 md:mb-0 ml-32" >
          <img 
            className="mr-2 h-8 w-8"
            src="/images/arch football.png" 
            alt="Logo"
          />
          <h1 className="text-2xl">Sport Courts</h1>
        </div>
        <div className='mr-32'>
          <button className="mr-5 bg-white text-blue-500 py-1.5 px-4 rounded-lg">
            Download Our Software
          </button>
          <button className="bg-white text-blue-500 py-1.5 px-4 rounded-lg">
            Login
          </button>
        </div>
      </header>
      )
      }

      export default Header