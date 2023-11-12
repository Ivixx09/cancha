import React from 'react';
function Header(){
    return(
      <header className="  pt-7 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-2 md:mb-0 ml-32 pl-16" >
          <img 
            className="mr-2 h-8 w-8"
            src="/images/arch football.png" 
            alt="Logo"
          />
          <h1 className="text-2xl">Sport Courts</h1>
        </div>
        <div className='mr-32 pr-20'>
          <button className="mr-5 bg-green-500 text-white py-1.5 px-3 rounded-lg">
            Software for clubs
          </button>
          <button className="bg-white text-green-500 py-1.5 px-12 rounded-lg">
            Login
          </button>
        </div>
      </header>
      )
      }

      export default Header