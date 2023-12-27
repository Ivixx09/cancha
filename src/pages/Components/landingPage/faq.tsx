import React, { useState } from 'react';

const AccordionItem = ({ FAQ, isOpen, onClick, isFirst, isLast }) => {
  return (
    <div className={`border p-3 bg-white w-full flex flex-col text-black shadow-lg ${isFirst ? 'rounded-t-lg' : ''} ${isLast ? 'rounded-b-lg' : ''} overflow-hidden transition-max-h duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-11'}`}>
      <div onClick={onClick} className="cursor-pointer flex justify-between items-center w-full">
        <h2 className='text-green-500 font-medium'>{FAQ.question}</h2>
        <span className="self-end">{isOpen ? '▲' : '▼'}</span>
      </div>
      <div className="mt-2">{FAQ.answer}</div>
    </div>
  );
};
const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a pitch?",
      answer: "Go to our homepage, choose the city and pitch, select the date and time, and follow the prompts to complete your booking."
    },
    {
      question: "What are your opening hours?",
      answer: "Our pitches are open from 9am to 11pm, 7 days a week."
    },
    {
        question: "How is the pitch maintenance managed?",
        answer: "Our pitches are professionally maintained by our dedicated staff who follow a rigorous schedule to ensure the pitches are in top condition."
      },
      {
        question: "What types of pitches do you offer?",
        answer: "We offer a variety of pitches including 5-a-side, 7-a-side, and full-sized 11-a-side pitches."
      },
      {
        question: "Do I need to bring my own ball?",
        answer: "While players generally bring their own equipment, we do provide balls for rent if needed."
      },
      {
        question: "Are there any restrictions due to COVID-19?",
        answer: "Yes, we are currently operating under local COVID-19 guidelines which include limited capacity, social distancing measures, and mask mandates. Please contact us for the most up-to-date info."
      },
      {
        question: "Do you offer discounts for block bookings or regular club training sessions?",
        answer: "Yes, we offer reduced rates for block bookings and regular club training sessions. Please contact us directly to discuss these options."
      },
    // add more FAQs as necessary
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-5xl mx-auto">
      <p className='text-center font-bold text-3xl text-green-500 pt-24 pb-10'>Frequently asked questions</p>
      {faqs.map((FAQ, i) => (
        <AccordionItem
          key={i}
          FAQ={FAQ}
          isOpen={i === openIndex}
          onClick={() => setOpenIndex(i === openIndex ? null : i)}
          isFirst={i === 0}
          isLast={i === faqs.length - 1}
        />
      ))}
    </div>
  );
};

export default FAQ;
