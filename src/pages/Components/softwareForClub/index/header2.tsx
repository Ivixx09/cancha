import Link from 'next/link';
import React from 'react';
function Header2(){
    return(
      <header className="  p-10 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-2 md:mb-0 ml-6 " >
          <Link href='/'><img 
            className="mr-2 h-8 w-8"
            src="/images/arch football.png" 
            alt="Logo"
          /></Link>
          <h1 className="text-3xl font-medium">Sport Courts</h1>
        </div>
        <div className='mr-4  flex'>
        <Link href="" target="" className='mx-5 text-2xl text-white underline font-semibold'>
              <p>Home</p>
              </Link>
              <Link href="/Components/softwareForClub/features/home" target="" className='mx-5 text-2xl text-white hover:underline font-semibold'>
                <p>Features</p>
                </Link>
                <Link href="/Components/softwareForClub/prices/home" target="" className='mx-5 text-2xl text-white hover:underline font-semibold'>
                  <p>Prices</p>
                  </Link>
                  <Link href="/Components/softwareForClub/tutorials/home" target="" className='mx-5 text-2xl text-white hover:underline font-semibold'>
                    <p>Tutorials</p>
                    </Link>
        <button className="font-semibold mr-5 bg-white transition duration-300 ease-in-out border border-green-500 hover:text-green-400 hover:scale-110 text-green-500 py-2 px-3 rounded-lg">
        Talk to sales
</button>
<button className="font-semibold bg-green-500 transition duration-300 ease-in-out   hover:scale-110 text-white py-2 px-8 rounded-lg">
  Try for free
</button>
        </div>
      </header>
      )
      }

      export default Header2