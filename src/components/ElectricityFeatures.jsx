import React from "react";

const ElectricityFeatures = () => {
  return (
    <>

    <div className="relative bg-cover bg-no-repeat flex justify-end items-start pl-28 pr-28 pt-10 w-full h-[50vh]">
    <div className="w-[50%] flex flex-col items-center">
      
      {/* Heading */}
      <div className="text-center text-2xl w-full text-white">
        <h2 className="font-bold leading-tight">
          We’ve made paying for electricity <br />
          <span className="text-primary-blue">seamless</span>
        </h2>
      </div>
  
      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-8 mt-8 w-full">
        
        {/* Card 1 */}
        <div className="flex flex-col items-start p-4 rounded-lg">
          <img
            src="../images/credit-card 1.png"
            alt="Pay with your Card"
            className="w-12 h-12 mb-2"
          />
          <span className="font-bold text-white text-md mb-1">
            Pay with your Card
          </span>
          <p className="text-white text-xs text-left">
            Make payments with your card and get value immediately.
          </p>
        </div>
  
        {/* Card 2 */}
        <div className="flex flex-col items-start p-4 rounded-lg">
          <img
            src="../images/management (1) 1.png"
            alt="Proxy Buying"
            className="w-12 h-12 mb-2"
          />
          <span className="font-bold text-white text-md mb-1">Proxy Buying</span>
          <p className="text-white text-xs text-left">
            Buying electricity for a third-party is super easy on Electrify.
          </p>
        </div>
  
        {/* Card 3 */}
        <div className="flex flex-col items-start p-4 rounded-lg">
          <img
            src="../images/convenient 1.png"
            alt="24/7 Customer Service"
            className="w-12 h-12 mb-2"
          />
          <span className="font-bold text-white text-md mb-1">
            24/7 Customer Service
          </span>
          <p className="text-white text-xs text-left">
            Enjoy our customer services and have your issues resolved anytime.
          </p>
        </div>
  
        {/* Card 4 */}
        <div className="flex flex-col items-start p-4 rounded-lg">
          <img
            src="../images/convenient 2.png"
            alt="Convenience"
            className="w-12 h-12 mb-2"
          />
          <span className="font-bold text-white text-md mb-1">Convenience</span>
          <p className="text-white text-xs text-left">
          You can now purchase electricity from wherever you are with ease using the Electrify website. 
          </p>
        </div>
  
      </div>
    </div>
  </div>  

  </>
  );
};

export default ElectricityFeatures;
