import React from 'react';
import '../Assets/Privacy.css';
import Header from './Header';
import Footer from './Footer';

function Privacy() {
  return (
    <div><Header/>
    <div className="privacy-policy-container">
      <div className="close-button">
      </div>
      <h1>Privacy Policy</h1>
      <p>
        Welcome to our Privacy Policy page. This page contains important information regarding the
        collection, use, and disclosure of your personal data when you use our services.
      </p>
      <p>
      we are committed to protecting the privacy of our customers and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information. By using our services and providing us with your information, you consent to the practices described in this policy.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect various types of information from you when you use our services. This information may
        include:
      </p>
      <ul>
        <li>Personal Information: We may collect personal information such as your name, address, phone number, email address, and other relevant details when you request our services or contact us..</li>
        <li>Payment Information: If you make a payment for our services, we may collect payment card information or other financial information necessary for payment processing..</li>
        <li>Service History: We maintain records of the services provided to you, including repair history and maintenance records..</li>
        <li>Website Usage Information: We may collect information about your usage of our website, including IP addresses, browser type, device information, and pages visited. We use cookies and similar technologies for this purpose.

        .</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>
        We may use the information we collect from you for various purposes.
      </p>
      <ul>
        <li>Service Delivery: We use your personal information to schedule, deliver, and track the services you request, including repairs, maintenance, and installations.</li>
        <li>Customer Support: We use your information to provide customer support, respond to inquiries, and address any issues you may have. </li>
        <li>Payment Processing: Your payment information is used to process payments for services rendered.</li>
        <li>Marketing and Communication: With your consent, we may send you promotional materials, newsletters, and updates about our services. You can opt out of these communications at any time.</li>
        <li>Improvement and Analytics: We analyze website usage data to improve our website's functionality, content, and user experience.</li>
      </ul>
      <h2>How We Protect Your Information</h2>
      <p>
      We employ reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is entirely secure, so we cannot guarantee absolute security.
      </p>
      <h2>Disclosure of Information</h2>
      <p>We do not sell, trade, or rent your personal information to third parties for their marketing purposes. However, we may share your information with trusted third-party service providers who assist us in delivering our services, such as payment processors and IT service providers. These third parties are bound by confidentiality agreements and are only permitted to use your information for the purposes specified.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
      We may update this Privacy Policy to reflect changes in our practices or for legal reasons. The revised policy will be posted on our website with an updated effective date.
      </p>
      
      </div>
      <Footer/>
      </div>
  );
}

export default Privacy;
