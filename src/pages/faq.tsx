import React, { useState } from 'react';

const AccordionItem = ({ FAQ, isOpen, onClick }) => {
  return (
    <div>
      <div onClick={onClick}>
        <h2>{FAQ.question}</h2>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <p>{FAQ.answer}</p>}
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
    <div>
      {faqs.map((FAQ, i) => 
        <AccordionItem 
          key={i} 
          FAQ={FAQ} 
          isOpen={i === openIndex}
          onClick={() => setOpenIndex(i === openIndex ? null : i)} 
        />
      )}
    </div>
  );
};

export default FAQ;
