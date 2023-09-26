import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Contact.css'; 
import Header from './Header';
import Footer from './Footer';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Thank you for your message!");

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <Header />

      <div className="contact-content">
        <h1><center>Contact Us</center></h1>
        <p>If you have any questions,please contact us using the information given below:</p>

        <div className="contact-details">
          <div className="contact-section">
            <h2>Address</h2>
            <p>Anna nagar,</p>
            <p>kovaipudhur,</p>
            <p>Coimbatore-641042</p>
          </div>

          <div className="contact-section">
            <h2>Email</h2>
            <p>Email: dsservicecenter03@gmail.com</p>
          </div>

          <div className="contact-section">
            <h2>Phone</h2>
            <p>Phone: 6373103344</p>
            <p>Phone: 6373103355</p>
          </div>
        </div>
        
      </div>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default Contact;
