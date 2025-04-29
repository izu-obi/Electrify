import React from "react";

const About = () => {
  return (
    <div>
      {/* Header Image */}
      <div>
        <img src="../images/aboutUsHead.png" alt="About Us Header" />
      </div>

      {/* Heading */}
      <div
        className="text-center text-4xl pt-10"
      >
        <span className="text-primary-blue">Electrify,</span> the smart choice for electricity
      </div>

      {/* Mission Section */}
      <div className="flex flex-col h-[70vh] md:flex-row px-6 md:px-28 py-10 gap-10 items-center">
        <div className="flex flex-col justify-center max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800">Mission</h2>
          <div className="h-1 w-16 bg-primary-blue my-4"></div>
          <p className="text-gray-600">
            Our mission is to simplify utility payments and enable energy access in Africa.
          </p>
        </div>

        <div className="">
          <img
            src="/images/about2.png"
            alt="About Mission"
            className="w-full max-w-lg object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col h-[80vh] lg:flex-row items-center justify-between px-6 lg:px-20 py-16 gap-10">
        <div className="flex-shrink-0 order-first">
          <img
            src="/images/about1.png"
            alt="What We Do"
            className="w-full max-w-lg object-cover"
          />
        </div>

        <div className="flex flex-col max-w-xl text-right items-end">
          <h2 className="text-2xl font-semibold text-gray-800">What We Do</h2>
          <div className="h-1 w-28 bg-primary-blue my-4"></div>
          <p className="text-gray-600">
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

      {/* Final Section */}
      <section className="bg-[#e3ecf8] py-16 px-4  text-center">
      <div className="max-w-3xl flex flex-col mx-auto">
        <h2 className="text-xl font-semibold text-gray-900">Our Purpose</h2>
        <div className="h-1 w-20 bg-primary-blue my-4 self-center"></div>
        <p className="text-sm text-gray-700 mb-4">
          Once, people didn’t have end-to-end control over their utilities. Right from
          choosing service providers, to paying utility bills and subsequently, maximizing
          value received.
        </p>
        <p className="text-sm text-gray-700">
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
