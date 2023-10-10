import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import FAQ from './faq'
import Bar from './bar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( <Fragment>
    <Head>
      <title>Cancha - Rent Sport Courts</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    
    <main className="p-5">
      <div>
    <h3 className="text-5xl mb-5">Welcome to Cancha!</h3>
        <p className="mb-5">Discover and book sports facilities around you</p>
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

      
    </main>

    
  </Fragment>
  )
}
