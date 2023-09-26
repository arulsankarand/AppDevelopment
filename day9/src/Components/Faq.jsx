import React, { useState } from 'react';
import '../Assets/Faq.css'
import Navbar from './Navbar';
import Sidebar from './Side2';
import Footer from './Footer';
import Header from './Header';

const Faq = () => {
  const [showAnswers, setShowAnswers] = useState(Array(10).fill(false));

  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  const faqItems = [
    {
      question: "What types of home appliances do you repair and service?",
      answer: "DS service center can work on, including refrigerators,air conditioner,washing machines,water purifier,ovens, etc."
    },
    {
        question: "How do I request a service appointment?",
        answer: "Contact us through mail,phone no,address,twitter,facebook,instagram."
    },
    {
        question: "What information do I need to provide when scheduling a service appointment?",
        answer: "The customers should have the appliance make and model, issue description, and contact information."
    },
    {
      question: "Is there a warranty on your repair work?",
      answer: "It depends upon the product yo service."
  },
  {
    question: "What payment methods do you accept?",
    answer: "Both online payment and cash on delivery are available."
},
{
  question: " How long will the repair or service take to complete?",
  answer: "It depends upon the product issue."
},
{
  question: " Do you use genuine replacement parts?",
  answer: "DS Service center use high-quality, genuine parts for repairs whenever possible."
},
    
  ];

  return (
      <>
      <Header/>
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions (FAQ)</h1>

      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <div className={`question ${showAnswers[index] ? 'question-open' : ''}`} onClick={() => toggleAnswer(index)}>
            <h2 className="question-text">{item.question}</h2>
            <i className={`fas ${showAnswers[index] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
          {showAnswers[index] && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Faq;