import { Fragment } from 'react'
import Head from 'next/head'
import Footer from './Components/landingPage/footer'
import FAQ from './Components/landingPage/faq'
import Banner1 from './Components/landingPage/banner1'
import Banner2 from './Components/landingPage/banner2'
import Banner3 from './Components/landingPage/banner3'
import Locations from './Components/landingPage/locations'
import BackgroundImage from './Components/landingPage/backgroundimage'


export default function Home() {
  return ( <Fragment>
    <Head>
      <title>Cancha - Rent Sport Courts</title>
      <link rel="icon" href="images/arch football.png" />
    </Head>

    
      
    
    <main className="">
      <BackgroundImage/>
        
        <Banner1></Banner1>
        
        
        <div className="mx-52   w-2/5 pt-16 ">
          
  <h2 className=" text-5xl font-bold text-green-500">We put Technology at the service of SPORTS in America</h2>
  <p className=" text-2xl  w-4/5 pt-4 pb-12">We are present in <span className='text-green-500'> Argentina, Peru, Chile, USA, Uruguay, Panama, Mexico, Colombia and Costa Rica.</span></p>
  <img
    src="/images/countries.png"
    alt="Image Placeholder"
    className="w-32 h-32"
  />
  <br />
  <br />
  <a
    href="https://your-link-here.com"
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-4 text-center font-medium bg-white border-2 border-green-500 text-green-500 w-2/5 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition-colors duration-300"
>
    I want it to reach my country
  </a>
  <br />
  <br />
</div>

        <div className='bg-green-500'>
        <div className=" py-4 text-center">
  <h2 className=" text-2xl font-bold pb-4">They trust us</h2>
</div>
<div className=' mx-auto  w-3/5 pl-24 pb-4'>
        <Banner2 ></Banner2>
       
        </div>
        </div>
        <div className=" mx-52  py-20  ">
  <div className="flex flex-wrap md:flex-nowrap justify-around items-center md:justify-between">
    <div className="p-4 w-2/3">
      <h2 className="  font-bold text-4xl mb-2 w-3/5 text-green-500">Improve Your <span className='text-orange-400'>Court's</span> Usability with Our Software!</h2>
      <p className='w-3/5 text-2xl pt-8'>
      We show you the benefits of having an online channel to manage your club that allows users to book online. <br  />

      </p>
      <p className='pt-8 text-2xl'>Leave us your contact information so we can contact you.</p>
    </div>
    <div className="p-4 flex justify-around md:flex-col mr-64">
  <button className="font-semibold m-2 bg-green-500 text-white py-2 px-8 rounded transition duration-300 ease-in-out hover:bg-green-400 hover:text-gray-100 hover:scale-110">
    See our features
  </button>
  <button className="font-semibold mt-6 m-2 border border-green-500 text-green-500 py-2 px-4 rounded transition duration-300 ease-in-out  hover:text-green-400 hover:scale-110">
    Our plans and prices
  </button>
</div>
  </div>
</div>

<Banner3></Banner3>
<FAQ></FAQ>
      
    </main>
    
<Locations/>
    <Footer></Footer>
  </Fragment>
  )
}
