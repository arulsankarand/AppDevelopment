import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Services.css'
import Header from './Header';

function Services() {
    return (
      <div><Header/>
      <div className='services-container'>
        <div><center>
      <h1>Our Services</h1></center>
      <p>Welcome to DS Service Center! We offer a range of services to your home appliances.</p>

      <h2> Repair Services </h2>
      <p> We specialize in repairing a variety of home appliances, including refrigerators, washing machines, dryers, ovens, stoves, and more.Our technicians can diagnose and fix problems quickly, ensuring minimal disruption to your daily routine.</p>

      <h2>Maintenance</h2>
      <p>Regular maintenance is key to extending the lifespan of your appliances. We offer preventive maintenance services to keep your appliances running efficiently, preventing potential breakdowns.</p>

      <h2>Installation</h2>
      <p>If you've purchased new appliances, our team can expertly install them for you, ensuring they are set up correctly and safely.

      </p>

      <h2>Replacement Parts</h2>
      <p>We stock a wide range of high-quality replacement parts for most major appliance brands. This allows us to complete repairs swiftly and with genuine components.</p>

      

    </div>
    </div></div>
  );
}

export default Services;
