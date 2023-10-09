import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( <Fragment>
    <Head>
      <title>Cancha - Rent Sport Courts</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    
    <main className="p-5">
    <div className="mb-10 ml-auto mr-auto max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-grow p-8">
              <div className="flex flex-wrap -mx-3">
                <div className="px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    Local area
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h10l-5 7-5-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-sport">
                    Sport
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-sport">
                      <option>Soccer</option>
                      <option>Tennis</option>
                      <option>Baseball</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h10l-5 7-5-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-time">
                    Time
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-time">
                      <option>9:00 AM</option>
                      <option>12:00 PM</option>
                      <option>3:00 PM</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h10l-5 7-5-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-4">
                  <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* You can replace the number and content with your data */}
        {Array(9).fill().map((_, i) => (
          <div key={i} className="border rounded-lg p-5">
            <img className="w-full h-64 object-cover mb-5 rounded" src="https://via.placeholder.com/500" alt="Court" />
            <h2 className="text-2xl mb-2">Court {i + 1}</h2>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="py-1 px-3 bg-blue-500 text-white rounded">Book</button>
          </div>
        ))}
      </section>
    </main>

    
  </Fragment>
  )
}
