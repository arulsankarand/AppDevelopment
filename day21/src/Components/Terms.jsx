import React from 'react';
import '../Assets/Terms.css'; 
import Header from './Header';
import Footer from './Footer';

function Terms() {
  return (
    <div><Header/>
    <div className="terms-and-conditions-container">
      <div className="close-button">
      </div>
      <h1>Terms and Conditions</h1>
      <ul>
      Welcome to DS Terms and Conditions page. These terms and conditions govern your use of our services
      and website. By accessing or using our services, you agree to comply with and be bound by these terms.
    </ul>
      <h2> Service Requests</h2>
      <ul>
        <li> You may request services from DS Service Center through our website, phone, or in-person.</li>
        <li>We will make reasonable efforts to schedule and provide services promptly, subject to availability and the nature of the service required.</li>
      </ul>
      <h2>Service Fees and Payment</h2>
      <ul>
        <li>Service fees will be provided to you before the commencement of the service. Payment is due upon completion of the service unless otherwise agreed.</li>
        <li> We accept various payment methods, including cash, credit/debit cards, and electronic payments, subject to availability.</li>
        <li> Invoices for services will be provided upon request.</li>
        </ul>
      <h2> Service Warranty</h2>
      <ul>
        <li>We provide a warranty on our repair services for a specified period. The warranty period and terms will be communicated to you before the service.</li>
        <li>The warranty covers the specific repair or maintenance performed and does not extend to other parts or issues</li>
        </ul>
      <h2>Customer Responsibilities</h2>
      <ul>
        <li>You are responsible for providing accurate and complete information about the appliance and the issue to be addressed.</li>
        <li>Ensure that the appliance is accessible for service and that you or an authorized representative is present during the service.</li>
        </ul>
      <h2>Privacy</h2>
      <ul>
        <li>We collect and use personal information as outlined in our Privacy Policy.</li>
        <li>By using our services, you consent to our data practices.</li>
        </ul>
      <h2>Changes to Terms and Conditions</h2>
      <ul>
        <li> DS Service Center may update these terms and conditions from time to time.</li>
        <li>  The updated terms will be posted on our website with an updated effective date.</li>
        </ul>
      <h2>Contact Us</h2>
      <ul>
        <li>If you have any questions or concerns about these terms and conditions, please contact us at
        dsservicecenter03@gmail.com</li>
        <li>Thank you for choosing DS Service Center. We look forward to service your home appliances.</li>
        </ul>
    </div><Footer/></div>
  );
}

export default Terms;
