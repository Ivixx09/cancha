import Link from 'next/link';
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
const Faq= () => {
  const faqs = [
    {
      question: "What is the price of the system?",
      answer: (
        <>
          We have different plans according to the number of courts and the country where the court is located. We invite you to see the prices{' '}
          <Link href="/pricing" className='text-green-500'>
            here
          </Link>
          .
        </>
      ),
    },
    {
      question: "Can deposits be collected through the page?",
      answer: "Yes, you can configure the 'guarantee card' mode, where the user must upload card details to be able to make the reservation. If the person who made the reservation does not comply with the cancellation policy or fails to play, the deposit amount will be debited."
    },
    {
        question: "How many administrator users can you have?",
        answer: "Our pitches You can have the number of users you need with different permissions and assign them a role according to their functions. There is no extra cost per user, everything is included in the plan. professionally maintained by our dedicated staff who follow a rigorous schedule to ensure the pitches are in top condition."
      },
      {
        question: "Can reservations be uploaded internally in addition to receiving online reservations?",
        answer: "Yes, you can manage your club internally with the possibility of loading fixed shifts, birthday events and tournaments."
      },
      {
        question: "Can special prices be configured depending on the day and time?",
        answer: "Yes, you can customize prices for each day of the week and configure prices by time, adjusting it to the dynamics of your club."
      },
      {
        question: "Can the customer's consumption be added?",
        answer: "With sport courts you can add the products that your clients consume in their reservations and have details when charging them."
      },
      {
        question: "Do they have training and support for the use of the system?",
        answer: "Yes, at the beginning of your free trial period we schedule a virtual meeting with the support area where you can see the different functionalities of the system and communicate with the team to resolve any questions that may arise."
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

export default Faq;
