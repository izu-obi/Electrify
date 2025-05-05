import React, { useEffect } from "react";

const About = () => {

useEffect(() => {
  document.title = "About Us | Electrify";
}, []);

  return (
    <div className="overflow-x-hidden">
      {/* Header Image - Full width on mobile */}
      <div className="w-full">
        <img 
          src="../images/aboutUsHead.png" 
          alt="About Us Header" 
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      {/* Heading - Adjusted for mobile */}
      <div className="text-center text-2xl md:text-4xl pt-6 md:pt-10 px-4">
        <span className="text-primary-blue">Electrify,</span> the smart choice for electricity
      </div>

      {/* Mission Section - Stacked on mobile */}
      <div className="flex flex-col-reverse md:flex-row min-h-[50vh] md:h-[70vh] px-4 md:px-28 py-8 md:py-10 gap-6 md:gap-10 items-center">
        <div className="flex flex-col justify-center max-w-md text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Mission</h2>
          <div className="h-1 w-16 bg-primary-blue my-3 md:my-4 mx-auto md:mx-0"></div>
          <p className="text-sm md:text-base text-gray-600">
            Our mission is to simplify utility payments and enable energy access in Africa.
          </p>
        </div>

        <div className="w-full">
          <img
            src="/images/about2.png"
            alt="About Mission"
            className="w-full max-w-md md:max-w-lg mx-auto object-cover"
          />
        </div>
      </div>

      {/* What We Do Section - Stacked on mobile */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20 py-10 md:py-16 gap-6 md:gap-10">
        <div className="w-full lg:w-auto order-last lg:order-first">
          <img
            src="/images/about1.png"
            alt="What We Do"
            className="w-full max-w-md md:max-w-lg mx-auto object-cover"
          />
        </div>

        <div className="flex flex-col max-w-xl text-center lg:text-right items-center lg:items-end">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">What We Do</h2>
          <div className="h-1 w-20 md:w-28 bg-primary-blue my-3 md:my-4 mx-auto lg:mx-0"></div>
          <p className="text-sm md:text-base text-gray-600">
            Electrify lets you pay for your electricity bills online, from the
            comfort of your homes and offices. The platform has simplified the
            process that comes with paying for utilities and has integrated
            tools and features to help you manage as well as conserve these
            utilities.
            <br />
            <br />
            We work round the clock every day, to ensure our customers get
            maximum value and added services for their purchases.
          </p>
        </div>
      </div>

      {/* Final Section - Adjusted for mobile */}
      <section className="bg-[#e3ecf8] py-10 md:py-16 px-4 text-center">
        <div className="max-w-3xl flex flex-col mx-auto">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">Our Purpose</h2>
          <div className="h-1 w-16 md:w-20 bg-primary-blue my-3 md:my-4 self-center"></div>
          <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4">
            Once, people didn't have end-to-end control over their utilities. Right from
            choosing service providers, to paying utility bills and subsequently, maximizing
            value received.
          </p>
          <p className="text-xs md:text-sm text-gray-700">
            We figured that this was an ordinary way to live, which is why we decided to do
            the extraordinary: Create a platform that lets you pay bills and maximize value
            gotten from service providers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;