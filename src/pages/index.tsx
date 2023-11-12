import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Head from 'next/head'
import Header from './Components/header'
import Footer from './Components/footer'
import FAQ from './Components/faq'
import Bar from './Components/bar'
import Banner1 from './Components/banner1'
import Banner2 from './Components/banner2'
import Banner3 from './Components/banner3'
import Locations from './Components/locations'
import BackgroundImage from './Components/backgroundimage'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( <Fragment>
    <Head>
      <title>Cancha - Rent Sport Courts</title>
      <link rel="icon" href="images/arch football.png" />
    </Head>

    
    <main className="">
      <BackgroundImage/>
        <div>
        <Banner1></Banner1>
        </div>
        
        <div className="mx-52   w-2/5 p-4 ">
          
  <h2 className=" text-5xl font-bold text-green-500">We put Technology at the service of SPORTS in America</h2>
  <p className=" text-2xl  w-4/5">We are present in <span className='text-green-500'> Argentina, Peru, Chile, USA, Uruguay, Panama, Mexico, Colombia and Costa Rica.</span></p>
  <img
    src="/images/countries.png"
    alt="Image Placeholder"
    className="w-32 h-32"
  />
  <a
    href="https://your-link-here.com"
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-4 text-center  bg-blue-500 w-2/5 px-4 py-2 rounded-lg hover:bg-blue-600"
  >
    I want it to reach my country
  </a>
</div>

        
        <div className="bg-emerald-400 py-4 text-center">
  <h2 className=" text-2xl font-bold">They trust us</h2>
</div>
<div className=' mx-auto bg-emerald-400 w-3/5 pl-24'>
        <Banner2 ></Banner2>
       
        </div>
        <div className=" mx-52  py-6 bg-green-500 ">
  <div className="flex flex-wrap md:flex-nowrap justify-around items-center md:justify-between">
    <div className="p-4 md:w-2/3">
      <h2 className="text-4xl mb-2 w-3/5">Improve Your Court's Usability with Our Software!</h2>
      <p className='w-3/5'>
        Right from managing bookings to getting insights about your court usage, 
        our software makes the task easier than ever before.
      </p>
    </div>
    <div className="p-4 md:w-1/3 flex justify-around md:flex-col md:items-end">
      <button className="m-2 bg-white text-blue-500 py-2 px-8 rounded">
      See our features
      </button>
      <button className="m-2 bg-white text-blue-500 py-2 px-4 rounded">
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
