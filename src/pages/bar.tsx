import React from "react";

function Bar() {
    return (
        <section>
            <div className="mb-10 ml-auto mr-auto max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-grow p-8">
                        <div className="flex flex-wrap -mx-3">
                            <div className="px-3">
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>New Mexico</option>
                                        <option>Missouri</option>
                                        <option>Texas</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h10l-5 7-5-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-sport">
                                        <option>Soccer</option>
                                        <option>Tennis</option>
                                        <option>Baseball</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h10l-5 7-5-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="relative">
                                    <input type="date" className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date"/>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-time">
                                        <option>9:00 AM</option>
                                        <option>12:00 PM</option>
                                        <option>3:00 PM</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h10l-5 7-5-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 py-4">
                                <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bar
