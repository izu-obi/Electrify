import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      {/* Hero Image - Full width with lazy loading */}
      <div className="w-full">
        <img 
          src="../images/privacyPolicy.png" 
          alt="Privacy Policy Header" 
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-gray-800">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-primary-blue">
          Privacy Policy
        </h1>
        
        <div className="space-y-4 text-sm sm:text-base">
          <p>
            Innovius Resources Limited (“us”, “we”, or “our”) operates the{' '}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
              www.electrify.com.ng
            </a>{' '}
            website (the “Service”).
          </p>

          <p>
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <p>
            By using the Service, you agree to the collection and use of information in accordance with this policy. Terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from{' '}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
              www.electrify.ng
            </a>.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

          <h3 className="font-semibold mb-2">Types of Data Collected</h3>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Cookies and Usage Data</li>
          </ul>

          <h3 className="font-semibold mb-2">Usage Data</h3>
          <p className="mb-4">We may collect information such as your IP address, browser type, pages visited, time spent on pages, and diagnostic data.</p>

          <h3 className="font-semibold mb-2">Tracking & Cookies Data</h3>
          <p className="mb-4">We use cookies and similar tracking technologies to track the activity on our Service. You can instruct your browser to refuse cookies. Examples:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Session Cookies</li>
            <li>Preference Cookies</li>
            <li>Security Cookies</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Use of Data</h2>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes</li>
            <li>To allow interactive features</li>
            <li>To provide customer care</li>
            <li>To monitor usage and improve the Service</li>
            <li>To detect, prevent and address issues</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Transfer of Data</h2>
          <p className="mb-4">Your data may be transferred to — and maintained on — computers outside of your country. By submitting information, you agree to this transfer. We ensure adequate security controls are in place.</p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Disclosure of Data</h2>
          <p className="mb-2">Lumia Limited may disclose your data if required to:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Comply with legal obligations</li>
            <li>Protect and defend our rights</li>
            <li>Investigate wrongdoing</li>
            <li>Protect users or public safety</li>
            <li>Prevent legal liability</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Security of Data</h2>
          <p className="mb-4">We use commercially acceptable methods to protect your data, but no method is 100% secure.</p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Service Providers</h2>
          <p className="mb-4">We may use third-party companies to help operate and analyze our Service. They have access only to perform tasks on our behalf.</p>

          <h3 className="font-semibold mb-2">Analytics</h3>
          <p className="mb-4">
            We use Google Analytics to track usage. You can opt out by installing the browser add-on.{' '}
            <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
              Google Privacy & Terms
            </a>.
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Links to Other Sites</h2>
          <p className="mb-4">Our Service may contain links to third-party sites. We are not responsible for their content or policies.</p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Changes to this Privacy Policy</h2>
          <p className="mb-4">We may update this Privacy Policy. Check this page periodically for updates. Changes become effective when posted.</p>

          <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p className="mb-2">If you have any questions, contact us:</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              By email:{' '}
              <a href="mailto:support@electrify.ng" className="text-primary-blue hover:underline">
                support@electrify.ng
              </a>
            </li>
            <li>
              Via website:{' '}
              <a href="https://www.electrify.ng/contact" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
                www.electrify.ng/contact
              </a>
            </li>
            <li>
              By phone:{' '}
              <a href="tel:+2348071371103" className="text-primary-blue hover:underline">
                +234 807 137 1103
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
