import React from 'react';
import '../Assets/About.css'
import Header from './Header';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container">
        <Header/>
      <h2>About DS Service Center </h2>
      
      <p>
      We understand the importance of having well-functioning home appliances in your daily life. Our mission is to provide top-notch repair and maintenance services for a wide range of home appliances, making sure your household runs smoothly.
      </p>
      <p>
      It is a trusted home appliance service Center, with years of experience serving our valued customers. We take pride in our commitment to excellence, customer satisfaction, and technical expertise.
      </p>
      <p>
      Our team consists of highly skilled and certified technicians who are experts in repairing and servicing various home appliances, including refrigerators, washing machines, ovens, dishwashers, and more. They stay updated with the latest advancements in appliance technology to provide you with the best service possible.
      <br/>
      <br/>
      When your home appliances require attention, look no further than Your Home Appliance Service Center. We are just a phone call away, ready to assist you. Contact us today to schedule a service appointment and experience the difference of working with a trusted home appliance service provider.
      </p>
      
      <p>
        Thank you for choosing DS service center for your Home Applianace. We look forward to help you,Thank you.!
      </p>
    </div>
  );
}

export default About;
