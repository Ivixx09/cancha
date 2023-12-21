import React from 'react';
function Header2(){
    return(
      <header className="  pt-10 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-2 md:mb-0 ml-6 " >
          <img 
            className="mr-2 h-8 w-8"
            src="/images/arch football.png" 
            alt="Logo"
          />
          <h1 className="text-3xl font-medium">Sport Courts</h1>
        </div>
        <div className='mr-4  flex'>
        <a href="www.google.com" target="" className='mx-5 text-2xl text-white underline'>
              <p>Home</p>
              </a>
              <a href="" target="" className='mx-5 text-2xl text-white hover:underline '>
                <p>Features</p>
                </a>
                <a href="" target="" className='mx-5 text-2xl text-white hover:underline'>
                  <p>Prices</p>
                  </a>
                  <a href="" target="" className='mx-5 text-2xl text-white hover:underline'>
                    <p>Tutorials</p>
                    </a>
        <button className="mr-5 bg-white transition duration-300 ease-in-out  hover:text-green-400 hover:scale-110 text-green-500 py-1.5 px-3 rounded-lg">
        Talk to sales
</button>
<button className="bg-green-500 transition duration-300 ease-in-out   hover:scale-110 text-white py-1.5 px-8 rounded-lg">
  Try for free
</button>
        </div>
      </header>
      )
      }

      export default Header2