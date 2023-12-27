import React, { useState, useEffect } from 'react';

const messages = [
  {
    id: 1,
    name: 'John Doe',
    logo: '/images/logo1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    logo: '/images/logo2.png',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    name: 'Jane Smith',
    logo: '/images/logo2.png',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    name: 'Jane Smith',
    logo: '/images/logo2.png',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more messages as needed
];

const Section5 = () => {
  return (
    <div className="text-center">
    {/* Title */}
    <h2 className="text-4xl pb-4 font-black">Software for Clubs and Sports Management</h2>
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-8">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className="message-card bg-green-200 p-4 rounded-lg shadow-md"
          style={{
            gridColumn: index % 2 === 0 ? '1 / span 1' : '2 / span 1',
            gridRow: index < 2 ? '1 / span 1' : '2 / span 1',
          }}
        >
          <div className="flex items-center mb-2">
            <img src={message.logo} alt={message.name} className="w-12 h-12 rounded-full mr-2" />
            <h3 className="text-lg font-semibold">{message.name}</h3>
          </div>
          <p className="text-sm">{message.text}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Section5;

