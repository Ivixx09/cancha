import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import FAQ from './faq'
import Bar from './bar'
import Banner1 from './banner1'
import Banner2 from './banner2'
import Banner3 from './banner3'
import Locations from './Components/locations'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( <Fragment>
    <Head>
      <title>Cancha - Rent Sport Courts</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header></Header>
    <main className="p-5">
     <div className="p-[5%] sm:p-[10%]" >
      
    <h3 className="text-6xl mb-10 ">Ready to play?</h3>
        <p className="text-xl">Discover and book sports facilities around you in real time</p>
        </div>
        <div className="pt-20">
        
        <Bar></Bar>
        </div>
        
        <div>
        <Banner1></Banner1>
        </div>
        <div className="mx-auto mt-20 bg-emerald-400 w-3/5 p-4 text-left">
  <h2 className="text-white text-4xl font-bold">Big Title</h2>
  <p className="text-white text-lg">Brief Description</p>
  <img
    src="/path-to-your-image.jpg"
    alt="Image Placeholder"
    className="w-full h-auto"
  />
  <a
    href="https://your-link-here.com"
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-4 text-center text-white bg-blue-500 w-2/5 px-4 py-2 rounded-lg hover:bg-blue-600"
  >
    I want it to reach my country
  </a>
</div>

        
        <div className="bg-emerald-400 py-4 text-center">
  <h2 className="text-white text-2xl font-bold">They trust us</h2>
</div>
<div className=' mx-auto bg-emerald-400 w-3/5 pl-24'>
        <Banner2 className=""></Banner2>
       
        </div>
        <div className="mt-10 py-6 bg-green-500 text-white">
  <div className="flex flex-wrap md:flex-nowrap justify-around items-center md:justify-between">
    <div className="p-4 md:w-2/3">
      <h2 className="text-4xl mb-2">Improve Your Court's Usability with Our Software!</h2>
      <p>
        Right from managing bookings to getting insights about your court usage, 
        our software makes the task easier than ever before. Try it for free now!
      </p>
    </div>
    <div className="p-4 md:w-1/3 flex justify-around md:flex-col md:items-end">
      <button className="m-2 bg-white text-blue-500 py-2 px-4 rounded">
        Download Now
      </button>
      <button className="m-2 bg-white text-blue-500 py-2 px-4 rounded">
        Learn More
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
